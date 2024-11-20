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
    category: "Drama",
    title: "Acting and Drama",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    duration: "04 Years",
    price: 750,
    image: course01,
  },
  {
    id: 2,
    category: "Design",
    title: "Art and Design",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    duration: "04 Years",
    price: 750,
    image: course02,
  },
  {
    id: 3,
    category: "Science",
    title: "Biology and Conservation",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    duration: "04 Years",
    price: 750,
    image: course03,
  },
  {
    id: 4,
    category: "Science",
    title: "Science and Engineering",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    duration: "04 Years",
    price: 750,
    image: course04,
  },
  {
    id: 5,
    category: "Health",
    title: "Health Administration",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    duration: "04 Years",
    price: 750,
    image: course05,
  },
  {
    id: 6,
    category: "Finance",
    title: "Accounting and Finance",
    description:
      "There are many variations of passages orem psum available but the majority have suffer alteration in some form by injected.",
    lessons: 10,
    rating: 4.0,
    seats: 75,
    duration: "04 Years",
    price: 750,
    image: course06,
  },
];

const CheckCourses = () => {
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Typography>
      </Box>
      <Grid2 maxWidth="lg" marginX="auto" container spacing={5}>
        {coursesData.map((course) => (
          <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={course.id}>
            <CourseCard {...course} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default CheckCourses;
