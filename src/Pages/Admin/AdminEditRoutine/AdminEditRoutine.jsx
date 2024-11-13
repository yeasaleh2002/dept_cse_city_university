import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, FormControl, Select, MenuItem } from "@mui/material";
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

const AdminEditRoutine = () => {
  const [batch, setBatch] = useState(""); // Holds the selected batch
  const [pdf, setPdf] = useState(null);   // Holds the selected PDF file

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdf(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleSubmit = () => {
    // Logic to handle form submission (e.g., API call to save batch and PDF)
    if (!batch || !pdf) {
      alert("Batch and PDF file are required.");
      return;
    }
    console.log("Batch:", batch);
    console.log("PDF File:", pdf.name);
    // Perform your submission logic here
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Edit Routine
      </Typography>
      
      {/* Batch Selection */}
      <Box mb={2}>
        <RequiredLabel>Batch</RequiredLabel>
        <FormControl fullWidth required>
          <Select
            value={batch}
            onChange={handleBatchChange}
            displayEmpty
            required
          >
            <MenuItem value="">
              <em>Choose a Batch</em>
            </MenuItem>
            <MenuItem value="Batch1">Batch 1</MenuItem>
            <MenuItem value="Batch2">Batch 2</MenuItem>
            <MenuItem value="Batch3">Batch 3</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* PDF Upload */}
      <Box mb={2}>
        <RequiredLabel>Routine PDF</RequiredLabel>
        <TextField
          type="file"
          fullWidth
          onChange={handleFileChange}
          inputProps={{ accept: ".pdf" }}
          required
        />
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
  );
};

export default AdminEditRoutine;
