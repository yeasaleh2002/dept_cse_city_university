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
import { AdminDashboardContent } from "../../../Components";

const drawerWidth = 240;

const adminRoutes = [
  { path: "dashboard", label: "Dashboard" },
  { path: "batch-list", label: "Batch List" },
  { path: "class-test-lab-list", label: "Class Test Lab List" },
  { path: "result-list", label: "Result List" },
  { path: "routine-list", label: "Routine List" },
  { path: "semester-approval-list", label: "Semester Approval List" },
  { path: "student-list", label: "Student List" },
  { path: "subject-list", label: "Subject List" },
  { path: "teacher-list", label: "Teacher List" },
  { path: "admission-approval-list", label: "Admission Approval List" },
];

function AdminDashboard(props) {
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
        {adminRoutes.map((route) => (
          <ListItem key={route.path} disablePadding>
            <ListItemButton
              selected={location.pathname.includes(route.path)}
              onClick={() => navigate(`/admin/${route.path}`)}
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

  const currentRoute = adminRoutes.find((route) =>
    location.pathname.includes(route.path)
  );
  const title = currentRoute ? currentRoute.label : "Admin Dashboard";

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
        {location.pathname === "/admin/dashboard" ? (
          <AdminDashboardContent />
        ) : (
          <Outlet />
        )}
      </Box>
    </Box>
  );
}

AdminDashboard.propTypes = {
  window: PropTypes.func,
};

export default AdminDashboard;
