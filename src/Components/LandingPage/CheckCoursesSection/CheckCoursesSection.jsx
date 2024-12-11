import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Grid2, Typography, Divider, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { callPublicApi } from "../../../utils/api";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";


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
            <Card
              sx={{
                width: "auto",
                boxShadow: 5,
                borderRadius: 10,
                borderBottomLeftRadius: 0,
                pt:"10px"
              }}
            >
              <Box sx={{ px: 3, py: 2, pt: 0 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "600", color: "#333", mb: 1 }}
                >
                  {course?.course_title}
                </Typography>

                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                    my: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ my: 1 }}
                    >
                      <GroupsOutlinedIcon sx={{ fill: "#fda31b" }} />
                      <Typography
                        variant="subtitle2"
                        color="#757f95"
                        sx={{
                          fontWeight: "600",
                          mt: 0.5,
                          whiteSpace: "nowrap",
                        }}
                      >
                        Credit: {course?.credit}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="body2"
                      sx={{
                        alignSelf: "end",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        bgcolor: "#fda31b",
                        px: 2,
                        py: 1,
                        borderRadius: 10,
                        borderBottomLeftRadius: 0,
                        // ml: 5,
                      }}
                    >
                      {course?.course_code}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CheckCoursesSection;
