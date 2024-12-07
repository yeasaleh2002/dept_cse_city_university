import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { CourseCard } from "../..";
import SchoolIcon from "@mui/icons-material/School";
import { callPublicApi } from "../../../utils/api";

const CheckCoursesSection = () => {
  const [coursesData, setCoursesData] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await callPublicApi("student/subjects/", "GET");
      setCoursesData(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Box sx={{ mb: 10 }}>
      <Box maxWidth="sm" marginX="auto" sx={{ textAlign: "center", pb: 5 }}>
        <Typography
          sx={{
            color: "#FDA31B",
            fontWeight: "600",
            borderBottom: "2px #FDA31B solid",
            display: "inline-flex",
            gap: 1,
            alignItems: "center",
          }}
          variant="h6"
        >
          <SchoolIcon sx={{ color: "#FDA31B" }} /> Our Courses
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", my: 1.5 }}>
          Let's Check Our <span style={{ color: "#FDA31B" }}>Courses</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#757f95", textAlign: "center" }}
        >
          The Computer Science and Engineering (CSE) department offers
          cutting-edge courses that empower students with essential skills in
          programming, artificial intelligence, and software development. Our
          hands-on approach ensures graduates are ready to excel in the tech
          industry.
        </Typography>
      </Box>
      <Grid2
        maxWidth="lg"
        marginX="auto"
        sx={{ px: { xs: 2, md: 4, lg: 0 } }}
        container
        spacing={5}
      >
        {coursesData.map((course) => (
          <Grid2 size={{ xs: 6, md: 4, lg: 3 }} key={course.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  {course?.course_title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Course Code: {course?.course_code}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Credit Fee: ${course?.credit_fee}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Credit: ${course?.credit}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Fee: ${course?.total_fee}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CheckCoursesSection;
