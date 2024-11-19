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
import { student_login, teachers } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginForm = () => {
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
    let tempErrors = {};
    tempErrors.email = email ? "" : "Email is required.";
    tempErrors.password = password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    navigate("/admin/dashboard");
    return;
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(
          "https://cityuniapi.vercel.app/user/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Set data in localStorage
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user_id);
          localStorage.setItem("role", data.role);
          localStorage.setItem("first_name", data.first_name);

          // Navigate based on role
          if (data.role === "admin") {
            navigate("/admin/dashboard");
          } else if (data.role === "teacher") {
            navigate("/teacher/dashboard");
          } else if (data.role === "student") {
            navigate("/student/profile");
          }

          toast.success("Login Successful!"); // Show success toast
        } else {
          toast.error(data.error || "Login failed!"); // Show error toast
        }
      } catch (error) {
        toast.error("An error occurred during login."); // Handle fetch error
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  console.log(pathname);
  const FullImage = styled("div")({
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
  });

  return (
    <div>
      <BreadcrumbsComponent title={loginType} breadcrumbs={breadcrumbs} />

      <Box sx={{ display: "flex", minHeight: "100vh", overflow: "hidden" }}>
        {/* Left section: Image for large screens, taking up 50% width */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "block" },
          }}
        >
          <FullImage />
        </Box>

        {/* Right section: Login form, taking up 50% width */}
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
            {/* Email Field */}
            <Box>
              <Typography
                component="label"
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Email{" "}
                <Typography color="error" component="span">
                  *
                </Typography>
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Box>

            {/* Password Field */}
            <Box>
              <Typography
                component="label"
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Password{" "}
                <Typography color="error" component="span">
                  *
                </Typography>
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

            {/* Login Button */}
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
    </div>
  );
};

export default LoginForm;
