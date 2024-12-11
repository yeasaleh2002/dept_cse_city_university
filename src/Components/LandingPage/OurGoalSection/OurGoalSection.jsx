import { Avatar, Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { goal_img, goal_bg } from "../../../assets/images";
import SchoolIcon from "@mui/icons-material/School";
import {
  teacher_2,
  online_courses,
  courses_material,
  money_2,
} from "../../../assets/icons";

const OurGoalSection = () => {
  const categories = [
    {
      id: 1,
      title: "Expert Teachers",
      description: "Learn from experts with 10+ years of skill.",
      icon: teacher_2,
    },
    {
      id: 2,
      title: "Courses Material",
      description: "Access resources from top global schools.",
      icon: courses_material,
    },
    {
      id: 3,
      title: "Online Courses",
      description: "Flexible courses with 95% satisfaction rate.",
      icon: online_courses,
    },
    {
      id: 4,
      title: "Affordable Price",
      description: "Quality education starts at just $199 now.",
      icon: money_2,
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${goal_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "#012758",
      }}
    >
      <Box sx={{ backgroundColor: "rgba(1, 39, 88, 0.8)" }}>
        <Grid2
          maxWidth="lg"
          marginX="auto"
          alignItems="center"
          container
          spacing={6}
          sx={{px: {xs: 2, md: 4, lg: 0}, py: 10}}
        >
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box>
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
                <SchoolIcon sx={{ color: "#FDA31B" }} /> Why Choose Us
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", my: 3, color: "#fff" }}
              >
                We Are Expert &{" "}
                <span style={{ color: "#FDA31B" }}>Do Our Best</span> For Your
                Goal
              </Typography>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                Our Computer Science Department aims to provide a comprehensive education that equips students with the skills and knowledge necessary to excel in the tech industry. We focus on fostering innovation, critical thinking, and practical experience through hands-on projects and collaborative learning. Our goal is to prepare students to meet the challenges of a rapidly evolving digital landscape and to become leaders in their fields.
              </Typography>
            </Box>
            <Grid2 container pt={5} spacing={3}>
              {categories.map(({ id, title, description, icon }) => (
                <Grid2 key={id} size={{ xs: 12, md: 6 }}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      py: 2,
                      pr: 2,
                      borderRadius: 10,
                      borderBottomLeftRadius: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        backgroundColor: "#FDA31B",
                        p: 2,
                        borderRadius: "50px 50px 50px 0",
                        ml: -0.5,
                      }}
                    >
                      <Avatar
                        src={icon}
                        sx={{ width: 40, height: 40, borderRadius: 0 }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: "bold", color: "#012758" }}
                      >
                        {title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#012758" }}>
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, px: 2 }}>
            <Box
              sx={{
                borderRadius: 20,
                borderTopRightRadius: 0,
                overflow: "hidden",
              }}
            >
              <Avatar
                src={goal_img}
                sx={{ width: "100%", height: "80%", borderRadius: 0 }}
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default OurGoalSection;
