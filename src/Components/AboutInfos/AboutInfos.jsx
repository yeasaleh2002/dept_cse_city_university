import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import { course, award, graduation, teacher_2 } from "../../assets/icons";

const data = [
  {
    icon: course,
    number: "500",
    text: "Total Courses",
  },
  {
    icon: graduation,
    number: "1900",
    text: "Our Students",
  },
  {
    icon: teacher_2,
    number: "750",
    text: "Skilled Lecturers",
  },
  {
    icon: award,
    number: "30",
    text: "Win Awards",
  },
];

const AboutInfos = () => {
  return (
    <Box maxWidth="lg" marginX="auto" sx={{ py: 10 }}>
      <Grid2 container spacing={2}>
        {data.map((item, index) => (
          <Grid2 size={{ xs: 6, md: 3 }} key={item.text}>
            <Box
              sx={{
                width: 100,
                height: 100,
                backgroundColor: "#fda31b",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginX: "auto",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                "&:hover": {
                  "&::after": {
                    opacity: 1,
                  },
                },
              }}
            >
              <img height={60} width={60} src={item.icon} alt={item.text} />
            </Box>

            <Box sx={{ p: 2, textAlign: "center" }}>
              <Typography
                sx={{ color: "#ffffff", fontWeight: "bold", my: 2 }}
                variant="h4"
              >
                {item.number}
              </Typography>
              <Typography sx={{ color: "#ffffff", fontWeight: "600" }}>
                +{item.text}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default AboutInfos;
