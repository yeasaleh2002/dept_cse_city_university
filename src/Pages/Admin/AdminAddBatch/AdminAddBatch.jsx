import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
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

const AdminAddBatch = () => {
  const [batchName, setBatchName] = useState("");

  const handleInputChange = (e) => {
    setBatchName(e.target.value);
  };

  const handleSubmit = () => {
    // Here, you can handle form submission
    console.log("Batch Name Submitted:", batchName);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Add New Batch
      </Typography>
      <Box>
        {/* Batch Name Input */}
        <RequiredLabel>Batch Name</RequiredLabel>
        <TextField
          name="batchName"
          fullWidth
          value={batchName}
          onChange={handleInputChange}
          placeholder="Enter Batch Name"
          required
        />
      </Box>
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </Container>
  );
};

export default AdminAddBatch;
