import React, { useEffect, useState } from "react";
import { Box, Typography, Grid2, useMediaQuery, useTheme } from "@mui/material";
import { reviewBg, review1, review2, review3, review4, review5  } from "../../../assets/images";
import SchoolIcon from "@mui/icons-material/School";
import { ReviewCard } from "../..";

const reviewData = [
  {
    id: 1,
    name: "Anthony Nicoll",
    role: "Student",
    review:
      "The Computer Science Department provides an excellent learning environment that fosters innovation and creativity.",
    rating: 5,
    image: review1,
  },
  {
    id: 2,
    name: "Richard Lock",
    role: "Student",
    review:
      "I have gained invaluable skills and knowledge that have prepared me for my future career in technology.",
    rating: 5,
    image: review2,
  },
  {
    id: 3,
    name: "Randal Grand",
    role: "Student",
    review:
      "The support from faculty and peers has been instrumental in my academic success.",
    rating: 5,
    image: review3,
  },
  {
    id: 4,
    name: "Edward Miles",
    role: "Student",
    review:
      "The hands-on projects and collaborative learning experiences have made my time here truly rewarding.",
    rating: 5,
    image: review4,
  },
  {
    id: 5,
    name: "Ninal Gordon",
    role: "Student",
    review:
      "I appreciate the resources and opportunities available to students in the Computer Science Department.",
    rating: 5,
    image: review5,
  },
];

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const isMedium = useMediaQuery(theme.breakpoints.down("lg"));
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewData.length);
      setTimeout(() => setTransition(false), 400); 
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const displayCount = isXSmall ? 1 : isSmall ? 2 : isMedium ? 3 : 4;

  return (
    <Box
      sx={{
        backgroundImage: `url(${reviewBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "#012758",
        mt: -10,
      }}
    >
      <Box sx={{ backgroundColor: "rgba(1, 39, 88, 0.85)", paddingY: 10 }}>
        <Box
          mx="auto"
          maxWidth="sm"
          sx={{ paddingX: { xs: 2, md: 4, lg: 0 }, textAlign: "center", pb: 5 }}
        >
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
            <SchoolIcon sx={{ color: "#FDA31B" }} /> Testimonials
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", my: 3, color: "#fff" }}
          >
            What Our Students <span style={{ color: "#FDA31B" }}>Say's</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff" }}>
            As a Computer Science student at City University, I have gained invaluable knowledge and skills that have prepared me for the tech industry. The hands-on projects and supportive faculty have made my learning experience truly enriching.
          </Typography>
        </Box>
        <Grid2
          maxWidth="lg"
          justifyContent="stretch"
          mx="auto"
          container
          spacing={3}
          sx={{ paddingX: { xs: 2, md: 4, lg: 0 }, transition: "transform 1s ease-in-out", }}
        >
          {Array.from({ length: displayCount }).map((_, i) => {
            const reviewIndex = (currentIndex + i) % reviewData.length;
            return (
              <Grid2
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                key={reviewData[reviewIndex].id}
                sx={{ 
                  transition: "transform 1s ease-in-out, opacity 1s ease-in-out",  
                  opacity: transition ? 0.7 : 1,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <ReviewCard
                  key={reviewData[reviewIndex].id}
                  {...reviewData[reviewIndex]}
                  sx={{ flexGrow: 1 }}
                />
              </Grid2>
            );
          })}
        </Grid2>
        </Box>
    </Box>
  );
};

export default ReviewSection;
