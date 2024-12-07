import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import { CourseCard } from "../..";
import SchoolIcon from "@mui/icons-material/School";
import {
  course01,
  course02,
  course03,
  course04,
  course05,
  course06,
} from "../../../assets/images";

const coursesData = [
  {
    id: 1,
    category: "Computer Science",
    title: "Introduction to Programming",
    description:
      "Learn the fundamentals of programming using Python. This course covers basic concepts, data structures, and algorithms.",
    lessons: 12,
    rating: 4.5,
    seats: 50,
    duration: "6 Months",
    price: 500,
    image: course01,
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    title: "Machine Learning Basics",
    description:
      "An introductory course on machine learning, covering supervised and unsupervised learning techniques.",
    lessons: 10,
    rating: 4.7,
    seats: 40,
    duration: "3 Months",
    price: 600,
    image: course02,
  },
  {
    id: 3,
    category: "Web Development",
    title: "Full Stack Web Development",
    description:
      "Master both front-end and back-end web development using HTML, CSS, JavaScript, and Node.js.",
    lessons: 15,
    rating: 4.8,
    seats: 30,
    duration: "6 Months",
    price: 800,
    image: course03,
  },
  {
    id: 4,
    category: "Data Science",
    title: "Data Analysis with Python",
    description:
      "Learn how to analyze and visualize data using Python libraries such as Pandas and Matplotlib.",
    lessons: 10,
    rating: 4.6,
    seats: 35,
    duration: "4 Months",
    price: 550,
    image: course04,
  },
  {
    id: 5,
    category: "Cybersecurity",
    title: "Introduction to Cybersecurity",
    description:
      "Understand the basics of cybersecurity, including threats, vulnerabilities, and protective measures.",
    lessons: 8,
    rating: 4.4,
    seats: 60,
    duration: "2 Months",
    price: 400,
    image: course05,
  },
  {
    id: 6,
    category: "Cloud Computing",
    title: "Cloud Fundamentals",
    description:
      "Explore the basics of cloud computing, including services, deployment models, and security considerations.",
    lessons: 10,
    rating: 4.5,
    seats: 45,
    duration: "3 Months",
    price: 500,
    image: course06,
  },
];

const CheckCoursesSection = () => {
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
          The Computer Science and Engineering (CSE) department offers cutting-edge courses that empower students with essential skills in programming, artificial intelligence, and software development. Our hands-on approach ensures graduates are ready to excel in the tech industry.
        </Typography>
      </Box>
      <Grid2 maxWidth="lg" marginX="auto" sx={{px: {xs: 2, md: 4, lg: 0}}} container spacing={5}>
        {coursesData.map((course) => (
          <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={course.id}>
            <CourseCard {...course} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CheckCoursesSection;
