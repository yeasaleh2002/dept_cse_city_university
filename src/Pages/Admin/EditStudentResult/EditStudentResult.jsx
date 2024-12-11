import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Autocomplete,
  Stack,
} from "@mui/material";
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

const EditStudentResult = () => {
  const [formData, setFormData] = useState({
    subject: "",
    batch: "",
    mark: "",
    examType: "",
    teacherId: "",
    studentId: "",
    semesterId: "",
  });

  const [errors, setErrors] = useState({});

  const subjectOptions = ["Subject1", "Subject2", "Subject3"]; // Example subjects
  const batchOptions = ["Batch1", "Batch2", "Batch3"]; // Example batches
  const examTypeOptions = ["Midterm", "Final", "Quiz"]; // Example exam types

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
    <Container maxWidth="lg" sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Edit Student Result
      </Typography>

      <Stack spacing={3}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          <Box width={{ xs: "100%", sm: "48%" }}>
            <RequiredLabel>Subject</RequiredLabel>
            <Autocomplete
              options={subjectOptions}
              value={formData.subject}
              onChange={(e, newValue) => setFormData({ ...formData, subject: newValue })}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="subject"
                  fullWidth
                  error={!!errors.subject}
                  helperText={errors.subject}
                />
              )}
            />
          </Box>

          <Box width={{ xs: "100%", sm: "48%" }}>
            <RequiredLabel>Batch</RequiredLabel>
            <Autocomplete
              options={batchOptions}
              value={formData.batch}
              onChange={(e, newValue) => setFormData({ ...formData, batch: newValue })}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="batch"
                  fullWidth
                  error={!!errors.batch}
                  helperText={errors.batch}
                />
              )}
            />
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          <Box width={{ xs: "100%", sm: "48%" }}>
            <RequiredLabel>Exam Type</RequiredLabel>
            <Autocomplete
              options={examTypeOptions}
              value={formData.examType}
              onChange={(e, newValue) => setFormData({ ...formData, examType: newValue })}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="examType"
                  fullWidth
                  error={!!errors.examType}
                  helperText={errors.examType}
                />
              )}
            />
          </Box>

          <Box width={{ xs: "100%", sm: "48%" }}>
            <RequiredLabel>Mark</RequiredLabel>
            <TextField
              name="mark"
              type="number"
              fullWidth
              value={formData.mark}
              onChange={handleInputChange}
              error={!!errors.mark}
              helperText={errors.mark}
            />
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          <Box width={{ xs: "100%", sm: "48%" }}>
            <RequiredLabel>Teacher ID</RequiredLabel>
            <TextField
              name="teacherId"
              fullWidth
              value={formData.teacherId}
              onChange={handleInputChange}
              error={!!errors.teacherId}
              helperText={errors.teacherId}
            />
          </Box>

          <Box width={{ xs: "100%", sm: "48%" }}>
            <RequiredLabel>Student ID</RequiredLabel>
            <TextField
              name="studentId"
              fullWidth
              value={formData.studentId}
              onChange={handleInputChange}
              error={!!errors.studentId}
              helperText={errors.studentId}
            />
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          <Box width={{ xs: "100%", sm: "48%" }}>
            <RequiredLabel>Semester ID</RequiredLabel>
            <TextField
              name="semesterId"
              fullWidth
              value={formData.semesterId}
              onChange={handleInputChange}
              error={!!errors.semesterId}
              helperText={errors.semesterId}
            />
          </Box>
        </Stack>

        <Button sx={{ backgroundColor: "#116E63", color: "white" }} fullWidth onClick={handleSubmit}>
          Submit Result
        </Button>
      </Stack>
    </Container>
  );
};

export default EditStudentResult;
