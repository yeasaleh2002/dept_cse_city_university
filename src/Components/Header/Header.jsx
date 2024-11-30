import React, { useState } from "react";
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

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  const navItems = [
    // { navName: "Home", link: "/home" },
    { navName: "Courses", link: "/courses" },
    { navName: "Academics", link: "/academics" },
    { navName: "Pages", link: "/pages" },
    { navName: "Admissions", link: "/admissions" },
    { navName: "Blog", link: "/blog" },
    { navName: "Contact", link: "/contact" },
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", py: 2, px: 4 }}>
      <Typography component={Link} to="/" variant="h4" sx={{ flexGrow: 1 }}>
        <span style={{ color: "#FDA31B" }}>edu</span>ka
      </Typography>
      <Divider />
      {renderNavItems()}
      <Button
        variant="contained"
        color="secondary"
        sx={{
          marginLeft: "auto",
          backgroundColor: "#FFA726",
          color: "white",
        }}
      >
        Apply Now
      </Button>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#FFFFFF", color: "black", py: 1 }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          maxWidth="lg"
          marginX="auto"
          sx={{
            px: { xs: 2, md: 4, lg: 0 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            py: 1,
          }}
        >
          <Typography component={Link} to="/" variant="h4" sx={{ flexGrow: 1 }}>
            <span style={{ color: "#FDA31B" }}>edu</span>ka
          </Typography>
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
                variant="contained"
                color="secondary"
                sx={{
                  marginLeft: "auto",
                  backgroundColor: "#FFA726",
                  color: "white",
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
