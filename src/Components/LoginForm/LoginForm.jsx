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

const LoginForm = () => {
  const pathname = window.location.pathname;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

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
    document.title = "Login || CSE Dept";
  }, []);

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = email ? "" : "Email is required.";
    tempErrors.password = password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle login logic here
      alert("Login Successful!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const FullImage = styled("div")({
    backgroundImage:
      'url("https://mist.ac.bd/storage/photos/cse/News%20and%20events/2023/OBE%20Session%201.jpg")',
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
