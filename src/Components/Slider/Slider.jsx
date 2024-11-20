import React, { useState, useEffect } from "react";
import { IconButton, Typography, Button, Box } from "@mui/material";
import { bg_slide_1, bg_slide_2, bg_slide_3 } from "../../assets/images";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SchoolIcon from "@mui/icons-material/School";

const slides = [
  {
    id: 1,
    image: bg_slide_1,
    subheading: "Welcome to City University !",
    heading: "The University of $Culture and Excellence",
    description:
      "Explore a diverse range of programs designed to foster creativity and innovation.",
  },
  {
    id: 2,
    image: bg_slide_2,
    subheading: "Join Our Community !",
    heading: "A Place for $Growth and Learning",
    description:
      "Become part of a vibrant community that encourages collaboration and personal development.",
  },
  {
    id: 3,
    image: bg_slide_3,
    subheading: "Your Future Starts Here !",
    heading: "Empowering Students for $Success",
    description:
      "We provide the tools and resources you need to achieve your academic and career goals.",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(slideTimer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "70vh",
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
          filter: "blur(4px) grayscale(80%)",
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

      <Box
        maxWidth="lg"
        marginX="auto"
        sx={{
          
          display: "flex",
          alignItems: "center",
          height: "100%",
          paddingX: {xs: 2, md: 4, lg: 0},
          paddingY: {xs: 0, md: 5},
          gap: 2,
          paddingLeft: 0,
          paddingRight: 0,
          transform: {xs: "translateY(20%)", md: "translateY(40%)"},
        }}
      >
        <Box
          sx={{
            maxWidth: "600px",
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
            <SchoolIcon sx={{ color: "#FDA31B" }} />{" "}
            {slides[currentSlide].subheading}
          </Typography>

          <Typography variant="h3" fontWeight="bold" mb={2}>
            {slides[currentSlide].heading.split(" ").map((part, index) => (
              <>
                {part.includes("$") ? (
                  <span key={part} style={{ color: "#FDA31B" }}>
                    {part.replace("$", "")}
                  </span>
                ) : (
                  part
                )}{" "}
                &nbsp;
              </>
            ))}
          </Typography>

          <Typography variant="body1" mb={2}>
            {slides[currentSlide].description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
            <Button
              variant="contained"
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
      </Box>

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
