import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/system";

const RequiredLabel = styled("label")(({ theme }) => ({
  display: "block",
  fontWeight: "bold",
  marginBottom: theme.spacing(0.5),
  "&::after": {
    content: '" *"',
    color: theme.palette.error.main,
  },
}));

const AdminEditStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: null,
    address: "",
    batch: "",
    password: "",
    fatherMotherName: "",
    gender: "",
    photo: "",
    sscRoll: "",
    sscReg: "",
    sscPassingYear: "",
    sscResult: "",
    sscSchool: "",
    sscBoard: "",
    sscGroup: "",
    hscRoll: "",
    hscReg: "",
    hscPassingYear: "",
    hscResult: "",
    hscCollege: "",
    hscBoard: "",
    hscGroup: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch student data to populate form (replace this with actual data fetching)
    const fetchStudentData = async () => {
      const studentData = {}; // replace with API call result
      setFormData(studentData);
    };
    fetchStudentData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, dob: date });
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
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Edit Student Information
      </Typography>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Name</RequiredLabel>
            <TextField
              name="name"
              placeholder="Enter full name"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Box>
          <Box flex={1}>
            <RequiredLabel>Email</RequiredLabel>
            <TextField
              name="email"
              placeholder="Enter email address"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Phone</RequiredLabel>
            <TextField
              name="phone"
              placeholder="Enter phone number"
              fullWidth
              value={formData.phone}
              onChange={handleInputChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Box>
          <Box flex={1}>
            <RequiredLabel>Date of Birth</RequiredLabel>
            <DatePicker
              value={formData.dob}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Select date of birth"
                  error={!!errors.dob}
                  helperText={errors.dob}
                />
              )}
            />
          </Box>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Address</RequiredLabel>
            <TextField
              name="address"
              placeholder="Enter address"
              fullWidth
              value={formData.address}
              onChange={handleInputChange}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Box>
          <Box flex={1}>
            <RequiredLabel>Batch</RequiredLabel>
            <TextField
              name="batch"
              placeholder="Enter batch"
              fullWidth
              value={formData.batch}
              onChange={handleInputChange}
              error={!!errors.batch}
              helperText={errors.batch}
            />
          </Box>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Password</RequiredLabel>
            <TextField
              name="password"
              placeholder="Enter password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Box>
          <Box flex={1}>
            <RequiredLabel>Father & Mother Name</RequiredLabel>
            <TextField
              name="fatherMotherName"
              placeholder="Enter parent's name"
              fullWidth
              value={formData.fatherMotherName}
              onChange={handleInputChange}
              error={!!errors.fatherMotherName}
              helperText={errors.fatherMotherName}
            />
          </Box>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Gender</RequiredLabel>
            <FormControl fullWidth error={!!errors.gender}>
              {/* <InputLabel>Gender</InputLabel> */}
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                displayEmpty
              >
                <MenuItem value="" disabled>Select gender</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
              {errors.gender && (
                <Typography variant="caption" color="error">
                  {errors.gender}
                </Typography>
              )}
            </FormControl>
          </Box>
          <Box flex={1}>
            <RequiredLabel>SSC Roll</RequiredLabel>
            <TextField
              name="sscRoll"
              placeholder="Enter SSC roll"
              fullWidth
              value={formData.sscRoll}
              onChange={handleInputChange}
              error={!!errors.sscRoll}
              helperText={errors.sscRoll}
            />
          </Box>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>HSC Roll</RequiredLabel>
            <TextField
              name="hscRoll"
              placeholder="Enter HSC roll"
              fullWidth
              value={formData.hscRoll}
              onChange={handleInputChange}
              error={!!errors.hscRoll}
              helperText={errors.hscRoll}
            />
          </Box>
        </Stack>

        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Save Changes
        </Button>
      </Stack>
    </Container>
  );
};

export default AdminEditStudent;
