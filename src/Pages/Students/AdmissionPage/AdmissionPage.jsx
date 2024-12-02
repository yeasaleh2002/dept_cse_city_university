import React, { useState } from "react";
import { BreadcrumbsComponent } from "../../../Components";
import { Container } from "@mui/material";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const AdmissionPage = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Application Form", link: "/application" },
  ];


  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      phone: form.phone.value,
      date_of_birth: form.date_of_birth.value,
      address: form.address.value,
      gender: form.gender.value,
      // photo: form.photo.files[0],
      father_name: form.father_name.value,
      mother_name: form.mother_name.value,
      batch: form.batch.value,
      student_id: form.student_id.value,
      Batch_name: form.batch_name.value,
      ssc_roll: form.ssc_roll.value,
      ssc_reg: form.ssc_reg.value,
      ssc_passing_year: form.ssc_passing_year.value,
      ssc_result: form.ssc_result.value,
      ssc_school: form.ssc_school.value,
      ssc_board: form.ssc_board.value,
      ssc_group: form.ssc_group.value,
      hsc_roll: form.hsc_roll.value,
      hsc_reg: form.hsc_reg.value,
      hsc_passing_year: form.hsc_passing_year.value,
      hsc_result: form.hsc_result.value,
      hsc_college: form.hsc_college.value,
      hsc_board: form.hsc_board.value,
      hsc_group: form.hsc_group.value,
    };
    console.log("Data", formData);


    fetch("https://city-uni-dpt-api.vercel.app/student/students/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log("Form has been added successfully");
          alert("Form has been added successfully");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form. Please try again.");
      });
    

  };

  return (
    <div>
      <BreadcrumbsComponent title="Admission Form" breadcrumbs={breadcrumbs} />
      <Container maxWidth="lg">
        <div style={{ padding: "" }} className="bg-[var(--bg-color)]">
          <Box
            sx={{
              p: 4,
              maxWidth: "800px",
              mx: "auto",
              backgroundColor: "#f9f9f9",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Typography variant="h5" mb={3}>
              Application Form
            </Typography>
            <form onSubmit={handleAdd}>
              <Typography variant="h6" mb={2}>
                Basic Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    name="first_name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    name="last_name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    name="phone"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth type="date" name="date_of_birth" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    name="address"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    label="Gender"
                    variant="outlined"
                    name="gender"
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                </Grid>
                {/* <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <label style={{ fontSize: "14px", fontWeight: 500 }}>
                      Student Photo
                    </label>
                    <Button
                      variant="outlined"
                      component="label"
                      sx={{
                        textTransform: "none",
                        fontSize: "14px",
                        fontWeight: 400,
                        justifyContent: "flex-start",
                      }}
                    >
                      Choose File
                      <input type="file" name="photo" />
                    </Button>
                  </Box>
                </Grid> */}
              </Grid>

              <Typography variant="h6" mt={4} mb={2}>
                Parent Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Father's Name"
                    variant="outlined"
                    name="father_name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Mother's Name"
                    variant="outlined"
                    name="mother_name"
                  />
                </Grid>
              </Grid>

              <Typography variant="h6" mt={4} mb={2}>
                Academic Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Batch"
                    variant="outlined"
                    name="batch"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Student ID"
                    variant="outlined"
                    name="student_id"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Batch Name"
                    variant="outlined"
                    name="batch_name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SSC Roll"
                    variant="outlined"
                    name="ssc_roll"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SSC Reg No."
                    variant="outlined"
                    name="ssc_reg"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SSC Passing Year"
                    variant="outlined"
                    name="ssc_passing_year"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SSC Result"
                    variant="outlined"
                    name="ssc_result"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SSC School"
                    variant="outlined"
                    name="ssc_school"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SSC Board"
                    variant="outlined"
                    name="ssc_board"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="SSC Group"
                    variant="outlined"
                    name="ssc_group"
                  />
                </Grid>
              </Grid>

              <Typography variant="h6" mt={4} mb={2}>
                Higher Secondary Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="HSC Roll"
                    variant="outlined"
                    name="hsc_roll"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="HSC Reg No."
                    variant="outlined"
                    name="hsc_reg"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="HSC Passing Year"
                    variant="outlined"
                    name="hsc_passing_year"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="HSC Result"
                    variant="outlined"
                    name="hsc_result"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="HSC College"
                    variant="outlined"
                    name="hsc_college"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="HSC Board"
                    variant="outlined"
                    name="hsc_board"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="HSC Group"
                    variant="outlined"
                    name="hsc_group"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                width="half"
                sx={{ mt: 3, bgcolor: "#FFA726", px: 4 }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default AdmissionPage;
