import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Stack,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BreadcrumbsComponent from "../BreadcrumbsComponent";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { callPublicApi } from "../../utils/api";
import { useAuth } from '../../contexts/AuthContext';

const FullImage = styled("div")(({ pathname }) => ({
  backgroundImage:
    pathname === "/teacher/login"
      ? `url("https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/448578790_975581417907685_8576743451782919621_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=0-7mmjAbGVMQ7kNvgHX-x4A&_nc_zt=23&_nc_ht=scontent.fdac8-1.fna&_nc_gid=ASCJ8akWrNkOV03sXr9R4jo&oh=00_AYDYEwKY2qZnNSUjIPqLbJ7QULCQmpJVdsr5gScLCk6kDQ&oe=6741B462")`
      : pathname === "/student/login"
      ? `url("https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/467326842_1089578963174596_6903994766518334856_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cF70sukx44MQ7kNvgGduhs2&_nc_zt=23&_nc_ht=scontent.fdac8-1.fna&_nc_gid=AOX_BLjk-mKWnAKq3Rr2c_w&oh=00_AYAtcNh-R8NLiqsIGAMYEsJXnRnDlUz0hk9_dYmT83YczQ&oe=6741A7BD")`
      : 'url("https://mist.ac.bd/storage/photos/cse/News%20and%20events/2023/OBE%20Session%201.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  width: "100%",
}));

const LoginForm = () => {
  const { login } = useAuth();
  const pathname = window.location.pathname;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const loginType = pathname.includes("student")
    ? "Student Login"
    : pathname.includes("teacher")
    ? "Teacher Login"
    : "Admin Login";

  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: loginType, link: pathname },
  ];

  useEffect(() => {
    document.title = "Login | CSE Dept";
  }, []);

  const validate = () => {
    const tempErrors = {
      email: email ? "" : "Email is required.",
      password: password ? "" : "Password is required.",
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const role = pathname.includes("admin") ? "admin" : pathname.includes("teacher") ? "teacher" : "student";
        const userData = await login(email, password, role);

        navigate(userData.role === "admin" ? "/admin/dashboard" : userData.role === "teacher" ? "/teacher/dashboard" : "/student/profile");
        toast.success("Login Successful!");
      } catch (error) {
        toast.error(error.message || "An error occurred during login.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box>
      <BreadcrumbsComponent title={loginType} breadcrumbs={breadcrumbs} />
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, md: 4, lg: 0}, display: "flex", minHeight: "100vh", overflow: "hidden" }}>
        <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }}>
          <FullImage pathname={pathname} />
        </Box>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            flex: 1,
            padding: { xs: "1rem", md: "4rem" },
            maxWidth: { xs: "100%", md: "50%" },
            width: "100%",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            {loginType}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Box>
              <Typography
                component="label"
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {pathname === "/admin/login" ? "Username" : "Email"}
                <Typography color="error" component="span">*</Typography>
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                type={pathname === "/admin/login" ? "text" : "email"}
                required
                placeholder={pathname === "/admin/login" ? "Enter your username" : "Enter your email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Box>
            <Box>
              <Typography
                component="label"
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Password <Typography color="error" component="span">*</Typography>
              </Typography>
              <TextField
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                required
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(errors.password)}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, fontWeight: "bold" }}
              fullWidth
            >
              Login
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default LoginForm;
