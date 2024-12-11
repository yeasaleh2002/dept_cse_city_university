import React, { useState } from "react";
import { BreadcrumbsComponent } from "../../../Components";
import { TextField, Button, Grid, Typography, Box, Paper } from "@mui/material";

const ContactUs = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message sent successfully!");
      console.log(formData);
    }
  };

  return (
    <div>
      <BreadcrumbsComponent title="Contact Us" breadcrumbs={breadcrumbs} />
      
      <Box sx={{ maxWidth: "lg", marginX: "auto", padding: 2 }}>
        <Grid container spacing={4}>
          {/* Left Side: Contact Information */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Feel free to reach out to us through the following contact
                details or fill out the form.
              </Typography>
              <Box sx={{ marginTop: 3 }}>
                <Typography variant="body2" fontWeight="bold">
                  Address
                </Typography>
                <Typography variant="body1">City University, Savar, Dhaka.</Typography>
              </Box>
              <Box sx={{ marginTop: 3 }}>
                <Typography variant="body2" fontWeight="bold">
                  Phone
                </Typography>
                <Typography variant="body1">+123 456 7890</Typography>
              </Box>
              <Box sx={{ marginTop: 3 }}>
                <Typography variant="body2" fontWeight="bold">
                  Email
                </Typography>
                <Typography variant="body1">contact@cityuniversity.com</Typography>
              </Box>
              <Box sx={{ marginTop: 7.5 }}>
                <Typography variant="body2" fontWeight="bold">
                Thank You for Considering Us!
                </Typography>
                <Typography variant="body1">We appreciate your interest in reaching out. Please fill out the form, and our team will get back to you promptly. Your queries and feedback mean a lot to us!</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Right Side: Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3 }}>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.name}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.email}
                  helperText={errors.email}
                />
                <TextField
                  label="Subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  error={!!errors.subject}
                  helperText={errors.subject}
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: "#FFA726",
                    "&:hover": {
                      backgroundColor: "#00214D",
                    },
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ContactUs;