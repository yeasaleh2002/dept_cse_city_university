import React, { useState } from "react";
import { Box, Grid2, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { EventCard } from "../..";
import SchoolIcon from "@mui/icons-material/School";
import { event1, event2, event3 } from "../../../assets/images";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const eventsData = [
  {
    id: 1,
    location: "25/B Milford Road, New York",
    date: "20 June, 2024",
    time: "10:00AM - 04:00PM",
    title: "CSE Workshop: Introduction to Machine Learning",
    description:
      "Join us for an interactive workshop on the basics of machine learning, where you'll learn key concepts and techniques.",
    imageUrl: event1,
  },
  {
    id: 2,
    location: "25/B Milford Road, New York",
    date: "25 June, 2024",
    time: "10:00AM - 04:00PM",
    title: "Guest Lecture: Innovations in Cybersecurity",
    description:
      "Attend a guest lecture by industry experts discussing the latest trends and innovations in cybersecurity.",
    imageUrl: event2,
  },
  {
    id: 3,
    location: "25/B Milford Road, New York",
    date: "30 June, 2024",
    time: "10:00AM - 04:00PM",
    title: "Hackathon: Build Your First App",
    description:
      "Participate in a hackathon where you'll collaborate with peers to build your first application from scratch.",
    imageUrl: event3,
  },
];

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const theme = useTheme();
  const isXSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmall = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handlePrev = () => {
    setTransition(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length
    );
    setTimeout(() => setTransition(false), 300);
  };

  const handleNext = () => {
    setTransition(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    setTimeout(() => setTransition(false), 300);
  };

  const displayCount = isXSmall ? 1 : isSmall ? 2 : 3;

  return (
    <Box sx={{ backgroundColor: "#f2f3f5", mt: -10, py: 10 }}>
      <Box sx={{paddingX: {xs: 2, md: 4, lg: 0}, position: "relative"}} maxWidth="lg" mx="auto">
        <Box maxWidth="sm" marginX="auto" sx={{ pb: 5, textAlign: "center" }}>
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
            <SchoolIcon sx={{ color: "#FDA31B" }} /> Events
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", my: 2 }}>
            Our Upcoming <span style={{ color: "#FDA31B" }}>Events</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#757f95" }}>
            Join us for our upcoming Computer Science Faculty events, including workshops, guest lectures, and hackathons designed to enhance your skills and knowledge in the tech industry.
          </Typography>
        </Box>
        <Grid2
          container
          justifyContent="stretch"
          spacing={3}
          sx={{
            opacity: transition ? 0 : 1,
            transition: "opacity 300ms ease-in-out",
            position: "relative",
          }}
          onMouseEnter={() => {
            document.querySelectorAll(".icon-button").forEach((button) => {
              button.style.display = "flex"; 
            });
          }}
          onMouseLeave={() => {
            document.querySelectorAll(".icon-button").forEach((button) => {
              button.style.display = "none"; 
            });
          }}
        >
          {Array.from({ length: displayCount }).map((_, i) => {
            const eventIndex = (currentIndex + i) % eventsData.length;
            return (
              <Grid2 size={{ xs: 12, md: 4 }} key={eventsData[eventIndex].id}>
                <EventCard {...eventsData[eventIndex]} />
              </Grid2>
            );
          })}
          <IconButton
            className="icon-button"
            size="large"
            onClick={handlePrev}
            sx={{
              position: "absolute",
              top: "50%",
              left: -20,
              transform: "translateY(-50%)",
              backgroundColor: "#fda31b",
              borderRadius: "50%",
              color: "white",
              display: "none", 
              "&:hover": {
                backgroundColor: "#555555",
                opacity: 1,
              },
            }}
          >
            <KeyboardArrowLeftIcon sx={{fill: "white"}} size="large" />
          </IconButton>
          <IconButton
            className="icon-button"
            onClick={handleNext}
            size="large"
            sx={{
              position: "absolute",
              top: "50%",
              right: -20,
              transform: "translateY(-50%)",
              backgroundColor: "#fda31b",
              borderRadius: "50%",
              color: "white",
              display: "none", 
              "&:hover": {
                backgroundColor: "#555555",
                opacity: 1,
              },
            }}
          >
            <KeyboardArrowRightIcon sx={{fill: "white"}} size="large" />
          </IconButton>
        </Grid2>
      </Box>
    </Box>
  );
};

export default EventsSection;
