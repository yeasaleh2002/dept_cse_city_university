import React, { useEffect, useState } from "react";
import { Box, Typography, Grid2, useMediaQuery, useTheme } from "@mui/material";
import { reviewBg } from "../../../assets/images";
import SchoolIcon from "@mui/icons-material/School";
import {
  review1,
  review2,
  review3,
  review4,
  review5,
} from "../../../assets/images";
import { ReviewCard } from "../..";

const reviewData = [
  {
    id: 1,
    name: "Anthony Nicoll",
    role: "Student",
    review:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    image: review1,
  },
  {
    id: 2,
    name: "Richard Lock",
    role: "Student",
    review:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    image: review2,
  },
  {
    id: 3,
    name: "Randal Grand",
    role: "Student",
    review:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    image: review3,
  },
  {
    id: 4,
    name: "Edward Miles",
    role: "Student",
    review:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
    rating: 5,
    image: review4,
  },
  {
    id: 5,
    name: "Ninal Gordon",
    role: "Student",
    review:
      "There are many variations of tend to repeat chunks some all form necessary injected for the going are humour words.",
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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when many desktop and web page
            editors looking at its layout.
          </Typography>
        </Box>
        <Grid2
          maxWidth="lg"
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
                  opacity: transition ? 0.7 : 1 
                }}
              >
                <ReviewCard
                  key={reviewData[reviewIndex].id}
                  {...reviewData[reviewIndex]}
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
