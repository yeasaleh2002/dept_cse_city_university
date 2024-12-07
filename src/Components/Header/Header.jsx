import React, { useEffect, useState } from "react";
import {
  AppBar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from "../../contexts/AuthContext";
import { logo_main } from "../../assets/logos";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const { user, getUser } = useAuth();

  useEffect(() => {
    getUser();
  }, []);

  const handleDrawerToggle = (event) => {
    event.stopPropagation();
    setMobileOpen((prev) => !prev);
  };

  console.log(user);

  const navItems = [
    // { navName: "Home", link: "/home" },
    // { navName: "Courses", link: "/courses" },
    // { navName: "Academics", link: "/academics" },
    // { navName: "Pages", link: "/pages" },
    // { navName: "Admissions", link: "/admissions" },
    // { navName: "Blog", link: "/blog" },
    // { navName: "Contact", link: "/contact" },
  ];

  const renderNavItems = () =>
    navItems.map((item) => (
      <Button
        key={item.navName}
        color="inherit"
        component={Link}
        to={item.link}
        sx={{ color: "black", fontWeight: "bold", display: "block" }}
      >
        {item.navName}
      </Button>
    ));

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        px: 4,
        py: 3,
      }}
    >
      <Box sx={{ ml: "auto", mr: 0, gap: 2 }}>
        <IconButton
          sx={{ border: "2px solid #FFA726", borderRadius: 1 }}
          onClick={handleDrawerToggle}
        >
          <CloseIcon fontSize="small" sx={{ fill: "#FFA726" }} />
        </IconButton>
      </Box>
      <Typography component={Link} to="/" variant="h4" sx={{ flexGrow: 1 }}>
        <span style={{ color: "#FDA31B" }}>edu</span>ka
      </Typography>
      <Divider />
      {renderNavItems()}
      <Button
        component={Link}
        to="/student/login"
        variant="outlined"
        color="secondary"
        sx={{
          border: "1px solid #FFA726",
          color: "#FFA726",
          fontWeight: "bold",
          py: 1.3,
          px: 5,
          borderRadius: 10,
          borderBottomLeftRadius: 0,
          width: "100%",
        }}
      >
        Login
      </Button>
      <Button
        component={Link}
        to="/admission"
        variant="contained"
        color="secondary"
        sx={{
          backgroundColor: "#FFA726",
          color: "white",
          py: 1.3,
          px: 5,
          borderRadius: 10,
          borderBottomLeftRadius: 0,
          width: "100%",
        }}
      >
        Apply Now
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#FFFFFF", color: "black", py: 1.4 }}
    >
      <Box
        sx={{
          maxWidth: "lg",
          mx: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexGrow: 1,
          }}
        >
          <Link style={{ marginLeft: "-2rem" }} to="/">
            <img src={logo_main} alt="logo" style={{ width: "100px", height: "auto" }} />
          </Link>
        
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: { md: 1.8, lg: 3 },
              }}
            >
              {renderNavItems()}

              <Button
                component={Link}
                to="/student/login"
                variant="outlined"
                color="secondary"
                sx={{
                  border: "1px solid #FFA726",
                  color: "#FFA726",
                  fontWeight: "bold",
                  py: 1.3,
                  px: 5,
                  borderRadius: 10,
                  borderBottomLeftRadius: 0,
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/admission"
                variant="contained"
                color="secondary"
                sx={{
                  backgroundColor: "#FFA726",
                  color: "white",
                  py: 1.3,
                  px: 3,
                  borderRadius: 10,
                  borderBottomLeftRadius: 0,
                }}
              >
                Apply Now
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "85%" },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
