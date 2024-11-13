import React, { useState } from "react";
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
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const RequiredLabel = styled("label")(({ theme }) => ({
  display: "block",
  fontWeight: "bold",
  marginBottom: theme.spacing(0.5),
  "&::after": {
    content: '" *"',
    color: theme.palette.error.main,
  },
}));

const AdminAddTeacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
    gender: "",
    photo: "",
    degrees: [{ name: "", year: "", result: "", university: "" }],
    experiences: [
      { institutionName: "", designation: "", startDate: null, endDate: null },
    ],
    description: "",
    research: "",
    publication: "",
    dob: null,
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, field) => {
    setFormData({ ...formData, [field]: date });
  };

  const handleArrayChange = (index, field, value, type) => {
    const updatedArray = [...formData[type]];
    updatedArray[index][field] = value;
    setFormData({ ...formData, [type]: updatedArray });
  };

  const addNewField = (type) => {
    const newField =
      type === "degrees"
        ? { name: "", year: "", result: "", university: "" }
        : {
            institutionName: "",
            designation: "",
            startDate: null,
            endDate: null,
          };
    setFormData({ ...formData, [type]: [...formData[type], newField] });
  };

  const removeField = (index, type) => {
    const updatedArray = [...formData[type]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [type]: updatedArray });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add New Teacher
      </Typography>
      <Stack spacing={3}>
        {/* Name and Designation Row */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Name</RequiredLabel>
            <TextField
              name="name"
              fullWidth
              placeholder="Enter teacher's name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box flex={1}>
            <RequiredLabel>Designation</RequiredLabel>
            <TextField
              name="designation"
              fullWidth
              placeholder="Enter designation"
              value={formData.designation}
              onChange={handleInputChange}
            />
          </Box>
        </Stack>

        {/* Email and Phone Row */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Email</RequiredLabel>
            <TextField
              name="email"
              type="email"
              fullWidth
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Box>
          <Box flex={1}>
            <RequiredLabel>Phone</RequiredLabel>
            <TextField
              name="phone"
              fullWidth
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </Box>
        </Stack>

        {/* Gender and Date of Birth Row */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Gender</RequiredLabel>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box flex={1}>
            <RequiredLabel>Date of Birth</RequiredLabel>
            <DatePicker
              value={formData.dob}
              onChange={(date) => handleDateChange(date, "dob")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Select date of birth"
                />
              )}
            />
          </Box>
        </Stack>

        {/* Degrees Section */}
        <Typography variant="h6">Degrees</Typography>
        {formData.degrees.map((degree, index) => (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            key={index}
          >
            <TextField
              label="Degree Name"
              placeholder="e.g., B.Sc."
              value={degree.name}
              onChange={(e) =>
                handleArrayChange(index, "name", e.target.value, "degrees")
              }
              fullWidth
            />
            <TextField
              label="Year"
              placeholder="e.g., 2020"
              value={degree.year}
              onChange={(e) =>
                handleArrayChange(index, "year", e.target.value, "degrees")
              }
              fullWidth
            />
            <TextField
              label="Result"
              placeholder="e.g., 3.5 GPA"
              value={degree.result}
              onChange={(e) =>
                handleArrayChange(index, "result", e.target.value, "degrees")
              }
              fullWidth
            />
            <TextField
              label="University"
              placeholder="e.g., XYZ University"
              value={degree.university}
              onChange={(e) =>
                handleArrayChange(
                  index,
                  "university",
                  e.target.value,
                  "degrees"
                )
              }
              fullWidth
            />
            <IconButton onClick={() => removeField(index, "degrees")}>
              <RemoveIcon />
            </IconButton>
          </Stack>
        ))}
        <Button
          variant="outlined"
          onClick={() => addNewField("degrees")}
          startIcon={<AddIcon />}
        >
          Add Degree
        </Button>

        {/* Experiences Section */}
        <Typography variant="h6">Experiences</Typography>
        {formData.experiences.map((experience, index) => (
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            key={index}
          >
            <TextField
              label="Institution Name"
              placeholder="e.g., ABC School"
              value={experience.institutionName}
              onChange={(e) =>
                handleArrayChange(
                  index,
                  "institutionName",
                  e.target.value,
                  "experiences"
                )
              }
              fullWidth
            />
            <TextField
              label="Designation"
              placeholder="e.g., Professor"
              value={experience.designation}
              onChange={(e) =>
                handleArrayChange(
                  index,
                  "designation",
                  e.target.value,
                  "experiences"
                )
              }
              fullWidth
            />
            <DatePicker
              label="Start Date"
              value={experience.startDate}
              onChange={(date) =>
                handleArrayChange(index, "startDate", date, "experiences")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Select start date"
                />
              )}
            />
            <DatePicker
              label="End Date"
              value={experience.endDate}
              onChange={(date) =>
                handleArrayChange(index, "endDate", date, "experiences")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  placeholder="Select end date"
                />
              )}
            />
            <IconButton onClick={() => removeField(index, "experiences")}>
              <RemoveIcon />
            </IconButton>
          </Stack>
        ))}
        <Button
          variant="outlined"
          onClick={() => addNewField("experiences")}
          startIcon={<AddIcon />}
        >
          Add Experience
        </Button>

        {/* Research and Publication Section */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box flex={1}>
            <RequiredLabel>Research</RequiredLabel>
            <TextField
              name="research"
              fullWidth
              placeholder="Enter research topics"
              value={formData.research}
              onChange={handleInputChange}
            />
          </Box>
          <Box flex={1}>
            <RequiredLabel>Publication</RequiredLabel>
            <TextField
              name="publication"
              fullWidth
              placeholder="Enter publications"
              value={formData.publication}
              onChange={handleInputChange}
            />
          </Box>
        </Stack>

        {/* Description Section */}
        <Box>
          <RequiredLabel>Description</RequiredLabel>
          <TextField
            name="description"
            fullWidth
            multiline
            rows={4}
            placeholder="Enter teacher's description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Box>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Container>
  );
};

export default AdminAddTeacher;
