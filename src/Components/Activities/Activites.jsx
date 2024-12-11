import { Box, Card, Grid2, Typography } from "@mui/material";
import React from "react";
import { library, money, scholarship, teacher } from "../../assets/icons";

const items = [
  {
    id: "01",
    title: "Scholarship Opportunities",
    description:
      "Empower your future with our extensive scholarship programs.",
    icon: scholarship,
  },
  {
    id: "02",
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals committed to your growth.",
    icon: teacher,
  },
  {
    id: "03",
    title: "Comprehensive Library",
    description:
      "Explore a rich collection of books and resources for your studies.",
    icon: library,
  },
  {
    id: "04",
    title: "Affordable Tuition",
    description:
      "Receive quality education at competitive prices.",
    icon: money,
  },
];

const Activites = () => (
  <Box
    sx={{
      paddingX: 5,
      maxWidth: "lg",
      marginLeft: "auto",
    }}
  >
    <Grid2 container alignItems="stretch" spacing={3}>
      {items.map((item) => (
        <Grid2 size={{ xs: 12, md: 3 }} key={item.id}>
          <Card
            key={item.id}
            sx={{
              padding: 3,
              borderRadius: 10,
              borderBottomLeftRadius: 0,
              height: "80%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  backgroundColor: "#116e63",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 2,
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: 50, height: 50, margin: 10 }}
                />
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "50px",
                  fontWeight: 800,
                  WebkitTextStroke: "2px #116e63",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.id}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                sx={{ color: "#116e63", fontWeight: "600" }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#116e63", fontWeight: "medium" }}
              >
                {item.description}
              </Typography>
            </Box>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  </Box>
);

export default Activites;
