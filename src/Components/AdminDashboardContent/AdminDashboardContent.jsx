import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
  Stack,
  Grid2,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { styled } from "@mui/system";

// Static data for demo purposes, later replace with dynamic data from API.
const studentData = [
  { name: "Graduated", value: 40 },
  { name: "Running", value: 50 },
  { name: "Dropout", value: 10 },
];

const teacherData = [
  { name: "Active", value: 80 },
  { name: "On Leave", value: 20 },
];

const AdminDashboardContent = () => {
  // Replace these with API calls later
  const [totalStudents, setTotalStudents] = useState(500);
  const [totalTeachers, setTotalTeachers] = useState(50);
  const [totalBatches, setTotalBatches] = useState(10);
  const [pendingAdmissions, setPendingAdmissions] = useState(5);
  const [currentRoutine, setCurrentRoutine] = useState(
    "Math - 9 AM, Physics - 11 AM"
  );
  document.title = "Admin Dashboard || CSE Dept";

  // Chart colors
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  // Styled components for layout
  const FullWidthCard = styled(Card)({
    minHeight: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });

  return (
    <Box sx={{ flexGrow: 1, padding: "2rem", overflow: "hidden" }}>
      <div>
        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Admin Dashboard
        </Typography>

        <Grid2 container spacing={4}>
          {/* Total Students, Teachers, and Batches Widgets */}
          <Grid2 item xs={12} md={4}>
            <FullWidthCard>
              <CardHeader title="Total Students" />
              <CardContent>
                <Typography variant="h5">{totalStudents}</Typography>
              </CardContent>
            </FullWidthCard>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <FullWidthCard>
              <CardHeader title="Total Teachers" />
              <CardContent>
                <Typography variant="h5">{totalTeachers}</Typography>
              </CardContent>
            </FullWidthCard>
          </Grid2>
          <Grid2 item xs={12} md={4}>
            <FullWidthCard>
              <CardHeader title="Total Batches" />
              <CardContent>
                <Typography variant="h5">{totalBatches}</Typography>
              </CardContent>
            </FullWidthCard>
          </Grid2>

          {/* Pending Admissions and Current Routine Widgets */}
          <Grid2 item xs={12} md={6}>
            <FullWidthCard>
              <CardHeader title="Pending Admissions" />
              <CardContent>
                <Typography variant="h5">{pendingAdmissions}</Typography>
              </CardContent>
            </FullWidthCard>
          </Grid2>
          <Grid2 item xs={12} md={6}>
            <FullWidthCard>
              <CardHeader title="Current Routine" />
              <CardContent>
                <Typography variant="h5">{currentRoutine}</Typography>
              </CardContent>
            </FullWidthCard>
          </Grid2>

          {/* Student Pie Chart */}
          <Grid2 item xs={12} md={6}>
            <Card>
              <CardHeader title="Student Status" />
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={studentData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      fill="#8884d8"
                    >
                      {studentData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid2>

          {/* Teacher Pie Chart */}
          <Grid2 item xs={12} md={6}>
            <Card>
              <CardHeader title="Teacher Status" />
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={teacherData}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      fill="#8884d8"
                    >
                      {teacherData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>

        {/* Upcoming Events (can be fetched dynamically later) */}
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
          <Button variant="contained" color="primary">
            Upcoming Events
          </Button>
          <Button variant="outlined" color="secondary">
            View Admissions
          </Button>
        </Stack>
      </div>
    </Box>
  );
};

export default AdminDashboardContent;
