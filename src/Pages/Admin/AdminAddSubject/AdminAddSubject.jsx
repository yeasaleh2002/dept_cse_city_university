import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const RequiredLabel = styled("label")(({ theme }) => ({
  display: "block",
  fontWeight: "bold",
  marginBottom: theme.spacing(0.5),
  "&::after": {
    content: '" *"',
    color: theme.palette.error,
  },
}));

const AdminAddSubject = () => {
  const [formData, setFormData] = useState({
    name: "",
    courseCode: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add New Subject
      </Typography>

      <Box mb={2}>
        <RequiredLabel>Name</RequiredLabel>
        <TextField
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
          required
        />
      </Box>

      <Box mb={2}>
        <RequiredLabel>Course Code</RequiredLabel>
        <TextField
          name="courseCode"
          fullWidth
          value={formData.courseCode}
          onChange={handleInputChange}
          error={!!errors.courseCode}
          helperText={errors.courseCode}
          required
        />
      </Box>

      <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default AdminAddSubject;
