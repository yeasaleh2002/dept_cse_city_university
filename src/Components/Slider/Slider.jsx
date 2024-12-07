import React, { useState, useEffect } from "react";
import { IconButton, Typography, Button, Box, Grid2 } from "@mui/material";
import { bg_slide_1, bg_slide_2, bg_slide_3 } from "../../assets/images";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: bg_slide_1,
    subheading: "Welcome to Tech Innovators!",
    heading: "Leading the Future of Computer Science",
    description: "Join us to master cutting-edge technologies and drive innovation.",
  },
  {
    id: 2,
    image: bg_slide_2,
    subheading: "Become a Tech Leader!",
    heading: "Empowering Future Innovators",
    description: "Collaborate with industry experts and enhance your skills in a dynamic environment.",
  },
  {
    id: 3,
    image: bg_slide_3,
    subheading: "Shape Your Career!",
    heading: "Unlock Your Potential in Tech",
    description: "Gain hands-on experience and access to top-tier resources to achieve your career aspirations.",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(slideTimer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        overflow: "hidden",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px) grayscale(80%)",
          boxShadow: "inset 0 0 20px rgba(0, 0, 0, 1)",
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <Grid2 maxWidth="lg" marginX="auto" container spacing={4}>
        <Grid2
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            paddingX: { xs: 2, md: 4, lg: 0 },
            paddingY: { xs: 0, md: 5 },
            gap: 2,
            mb: 10,
            minHeight: "60vh",
          }}
          size={{ xs: 12, md: 6 }}
        >
          <Box
            sx={{
              color: "white",
              textAlign: slides[currentSlide].id % 2 === 0 ? "left" : "right",
            }}
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
              <SchoolIcon sx={{ color: "#FDA31B" }} /> {slides[currentSlide].subheading}
            </Typography>

            <Typography variant="h3" fontWeight="bold" mb={2}>
              {slides[currentSlide].heading.split(" ").map((part, index) => (
                <span key={part}>
                  {part.includes("$") ? (
                    <span style={{ color: "#FDA31B" }}>{part.replace("$", "")}</span>
                  ) : (
                    part
                  )}{" "}
                  &nbsp;
                </span>
              ))}
            </Typography>

            <Typography variant="body1" mb={2}>
              {slides[currentSlide].description}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
              <Button
                variant="contained"
                component={Link}
                to="/about-us"
                sx={{
                  backgroundColor: "#FDA31B",
                  color: "white",
                  borderRadius: "50px",
                  borderBottomLeftRadius: 0,
                  padding: "12px 24px",
                  fontWeight: "bold",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: "#C68A1B",
                  },
                }}
                endIcon={<KeyboardArrowRightIcon sx={{ color: "white" }} />}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/contact-us"
                sx={{
                  backgroundColor: "white",
                  color: "#4A4A4A",
                  borderRadius: "50px",
                  borderBottomLeftRadius: 0,
                  padding: "12px 24px",
                  fontWeight: "bold",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: "whitesmoke",
                    opacity: 1,
                  },
                }}
                endIcon={<KeyboardArrowRightIcon sx={{ color: "#4A4A4A" }} />}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} />
      </Grid2>

      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(63, 73, 90, 0.6)",
          borderRadius: "50%",
          color: "black",
          "&:hover": {
            backgroundColor: "white",
            opacity: 1,
          },
        }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(63, 73, 90, 0.6)",
          borderRadius: "50%",
          color: "black",
          "&:hover": {
            backgroundColor: "white",
            opacity: 1,
          },
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
