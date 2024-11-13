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

const AdminEditBatch = () => {
  const [batchName, setBatchName] = useState(""); // Assuming you get the batch name from a source like props or API

  const handleInputChange = (e) => {
    setBatchName(e.target.value);
  };

  const handleSubmit = () => {
    // Here, you can handle form submission logic to update the batch name
    console.log("Updated Batch Name:", batchName);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Edit Batch
      </Typography>
      <Box>
        {/* Batch Name Input */}
        <RequiredLabel>Batch Name</RequiredLabel>
        <TextField
          name="batchName"
          fullWidth
          value={batchName}
          onChange={handleInputChange}
          placeholder="Edit Batch Name"
          required
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Update
      </Button>
    </Container>
  );
};

export default AdminEditBatch;
