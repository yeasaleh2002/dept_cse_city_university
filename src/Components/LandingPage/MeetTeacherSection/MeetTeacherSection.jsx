import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import TeacherCard from "../../TeacherCard/TeacherCard";
import { teacher1, teacher2, teacher3, teacher4 } from "../../../assets/images";

const MeetTeacherSection = () => {
  const teachers = [
    {
      id: 1,
      name: "John Doe",
      subject: "Mathematics",
      designation: "Professor",
      image: teacher1,
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "Science",
      designation: "Associate Professor",
      image: teacher2,
    },
    {
      id: 3,
      name: "Alice Johnson",
      subject: "English",
      designation: "Assistant Professor",
      image: teacher3,
    },
    {
      id: 4,
      name: "Mark Brown",
      subject: "History",
      designation: "Professor",
      image: teacher4,
    },
  ];

  return (
    <Box maxWidth="lg" marginX="auto" paddingBottom={10}>
      <Box maxWidth="sm" mx="auto" sx={{ textAlign: "center", pb: 5 }}>
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
          <SchoolIcon sx={{ color: "#FDA31B" }} /> Our Teachers
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", my: 2 }}>
          Meet With Our <span style={{ color: "#FDA31B" }}>Teachers</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#757f95", textAlign: "center" }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Typography>
      </Box>
      <Grid2 container spacing={3}>
        {teachers.map((teacher) => (
          <Grid2 key={teacher.id} size={{ xs: 12, md: 6, lg: 3 }}>
            <TeacherCard {...teacher} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default MeetTeacherSection;
