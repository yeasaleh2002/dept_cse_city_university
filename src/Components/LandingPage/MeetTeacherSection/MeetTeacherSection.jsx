import { Box, Grid2, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import TeacherCard from "../../TeacherCard/TeacherCard";
import { teacher1, teacher2, teacher3, teacher4 } from "../../../assets/images";
import { callPublicApi } from "../../../utils/api";

const defaultTeachers = [
  {
    id: 1,
    name: "Rahim Khan",
    subject: "Mathematics",
    designation: "Professor",
    image: teacher3,
  },
  {
    id: 2,
    name: "Sultana Begum",
    subject: "Science",
    designation: "Associate Professor",
    image: teacher2,
  },
  {
    id: 3,
    name: "Amina Sultana",
    subject: "English",
    designation: "Assistant Professor",
    image: teacher1,
  },
  {
    id: 4,
    name: "Fatima Ali",
    subject: "History",
    designation: "Professor",
    image: teacher4,
  },
];

const MeetTeacherSection = () => {
  const [teachers, setTeachers] = useState(defaultTeachers);

  // useEffect(() => {
  //   const { data, status  } = callPublicApi("teacher/teachers/", "GET");
  //   if (status === 200) {
  //     if (data.length > 0) {
  //       setTeachers(data);
  //     } else {
  //       setTeachers(defaultTeachers);
  //     }
  //   } 
  // }, []);


  return (
    <Box maxWidth="lg" marginX="auto" sx={{paddingX: {xs: 2, md: 4, lg: 0}, paddingBottom: 10}}>
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
          Our Science faculty is dedicated to fostering a deep understanding of scientific principles and encouraging critical thinking. Our experienced teachers engage students with hands-on experiments and real-world applications, ensuring that they not only learn but also appreciate the beauty of science in everyday life.
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
