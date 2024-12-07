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
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../contexts/AuthContext";
import { logo_main } from "../../assets/logos";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const { user, getUser, logout } = useAuth();

  useEffect(() => {
    getUser();
  }, []);

  const handleDrawerToggle = (event) => {
    event.stopPropagation();
    setMobileOpen((prev) => !prev);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { navName: "Courses", link: "/courses" },
    { navName: "Academics", link: "/academics" },
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

  const renderUserSection = () => {
    if (user && user.username) {
      return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 5 }}>
        <Typography
          variant="subtitle1"
          color="inherit"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {user.first_name} {user.last_name}
        </Typography>
        <IconButton onClick={handleOpenMenu}>
          <Avatar
            src={user.photo}
            alt="user"
            sx={{ width: 40, height: 40, borderRadius: 2 }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              navigate("/student/profile");
            }}
          >
            View Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleCloseMenu();
              logout();
              navigate("/student/login");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Box>
      );
    } else {
      return (
        <>
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
            Admission
          </Button>
        </>
      );
    }
  };

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
        py: 1,
      }}
    >
      <Box
        sx={{
          gap: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Link style={{ marginLeft: "-1rem" }} to="/">
          <img
            src={logo_main}
            alt="logo"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
        <IconButton
          size="small"
          sx={{ border: "3px solid #FFA726" }}
          onClick={handleDrawerToggle}
        >
          <CloseIcon fontSize="small" sx={{ fill: "#FFA726" }} />
        </IconButton>
      </Box>
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
        Admission
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
            ml: { xs: 2, md: 0 },
          }}
        >
          <Link style={{ marginLeft: "-2rem" }} to="/">
            <img
              src={logo_main}
              alt="logo"
              style={{ width: "100px", height: "auto" }}
            />
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
              {renderUserSection()}
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
