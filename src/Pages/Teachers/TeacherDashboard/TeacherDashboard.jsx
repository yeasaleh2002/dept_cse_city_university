import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { TeacherProfile } from "../../../Components";

const drawerWidth = 240;

const teacherRoutes = [
  { path: "dashboard", label: "Dashboard" },
  { path: "class-routine", label: "Class Routine" },
  { path: "edit-profile", label: "Edit Profile" },
  { path: "post-class-test", label: "Post Class Test" },
  { path: "publish-result", label: "Publish Result" },
  { path: "notifications", label: "Notifications" },
  { path: "class-test-list", label: "Class Test List" },
  { path: "edit-class-test/:id", label: "Edit Class Test" },
  { path: "add-experience", label: "Add Experience" },
  { path: "add-degree", label: "Add Degree" },
  { path: "publish-result-list", label: "Publish Result List" },
  { path: "", label: "Logout" },
];

function TeacherDashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {teacherRoutes.map((route) => (
          <ListItem key={route.path} disablePadding>
            <ListItemButton
              selected={location.pathname.includes(route.path)}
              onClick={() =>
                navigate(route.path === "" ? "/" : `/teacher/${route.path}`)
              }
            >
              <ListItemText primary={route.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const currentRoute = teacherRoutes.find((route) =>
    location.pathname.includes(route.path)
  );
  const title = currentRoute ? currentRoute.label : "Teacher Dashboard";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#116E63",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {location.pathname === "/teacher/dashboard" ? (
          <TeacherProfile />
        ) : (
          <Outlet />
        )}
      </Box>
    </Box>
  );
}

TeacherDashboard.propTypes = {
  window: PropTypes.func,
};

export default TeacherDashboard;
