import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Grid2,
  Divider,
  Box,
  Button,
} from "@mui/material";

const StudentProfile = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ maxWidth: "md", mx: "auto", px: { xs: 2, md: 4 } }}>
      <Card
        style={{
          maxWidth: 700,
          margin: "3rem auto",
          padding: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={user?.photo || user?.first_name?.charAt(0)}
                sx={{ bgcolor: "primary.main", width: 80, height: 80 }}
              >
                {/* {user?.photo || user?.first_name?.charAt(0)} */}
              </Avatar>
            }
            title={`${user?.first_name} ${user?.last_name}`}
            subheader={`Student ID: ${user?.student_id} | Batch: ${user?.Batch_name}`}
            titleTypographyProps={{
              variant: "h4",
              fontWeight: "bold",
              sx: { fontSize: "1.5rem" },
            }}
            subheaderTypographyProps={{
              variant: "body2",
              color: "text.secondary",
              sx: { fontSize: "1rem" },
            }}
          />
          <div style={{ marginRight: "10px" }}>
            <a href="https://city-uni-dpt-api.onrender.com/student/registrations/">
              <Button variant="contained">Semester Registrations</Button>
            </a>
          </div>
        </div>
        <Divider sx={{ margin: "1.5rem 0" }} />
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: "1.25rem", fontWeight: "600" }}
          >
            Contact Information
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Email:</strong> {user?.email}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Phone:</strong> {user?.phone}
              </Typography>
            </Grid2>
          </Grid2>

          <Divider sx={{ margin: "2rem 0" }} />

          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: "1.25rem", fontWeight: "600" }}
          >
            Personal Details
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Father's Name:</strong> {user?.father_name}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Mother's Name:</strong> {user?.mother_name}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Gender:</strong>{" "}
                {user?.gender === "M" ? "Male" : "Female"}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Date of Birth:</strong> {user?.date_of_birth}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Address:</strong> {user?.address}
              </Typography>
            </Grid2>
          </Grid2>

          <Divider sx={{ margin: "2rem 0" }} />

          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontSize: "1.25rem", fontWeight: "600" }}
          >
            Education Details
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontSize: "1.1rem", fontWeight: "500" }}
          >
            <strong>SSC</strong>
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Roll:</strong> {user?.ssc_roll}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Reg:</strong> {user?.ssc_reg}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Passing Year:</strong> {user?.ssc_passing_year}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Result:</strong> {user?.ssc_result}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>School:</strong> {user?.ssc_school}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Board:</strong> {user?.ssc_board}
              </Typography>
            </Grid2>
          </Grid2>

          <Divider sx={{ margin: "2rem 0" }} />

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ fontSize: "1.1rem", fontWeight: "500" }}
          >
            <strong>HSC</strong>
          </Typography>
          <Grid2 container spacing={3}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Roll:</strong> {user?.hsc_roll}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Reg:</strong> {user?.hsc_reg}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Passing Year:</strong> {user?.hsc_passing_year}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Result:</strong> {user?.hsc_result}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>College:</strong> {user?.hsc_college}
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                <strong>Board:</strong> {user?.hsc_board}
              </Typography>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StudentProfile;
