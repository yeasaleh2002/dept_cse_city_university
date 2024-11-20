import React, { useState } from "react";
import { Box, Grid2, Typography, Button, IconButton } from "@mui/material";
import { EventCard } from "../..";
import SchoolIcon from "@mui/icons-material/School";
import { event1, event2, event3 } from "../../../assets/images";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const eventsData = [
  {
    id: 1,
    location: "25/B Milford Road, New York",
    date: "16 June, 2024",
    time: "10:00AM - 04:00PM",
    title: "High School Program 2024",
    description:
      "There are many variations of passages the majority have some injected humour.",
    imageUrl: event1,
  },
  {
    id: 2,
    location: "25/B Milford Road, New York",
    date: "16 June, 2024",
    time: "10:00AM - 04:00PM",
    title: "High School Program 2024",
    description:
      "There are many variations of passages the majority have some injected humour.",
    imageUrl: event2,
  },
  {
    id: 3,
    location: "25/B Milford Road, New York",
    date: "16 June, 2024",
    time: "10:00AM - 04:00PM",
    title: "High School Program 2024",
    description:
      "There are many variations of passages the majority have some injected humour.",
    imageUrl: event3,
  },
];

const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(false);

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

  return (
    <Box sx={{ backgroundColor: "#F5F5F5", mt: -10 }}>
      <Box maxWidth="lg" mx="auto" sx={{ py: 10, position: "relative" }}>
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
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
        </Box>
        <Grid2
          container
          spacing={3}
          sx={{
            opacity: transition ? 0 : 1,
            transition: "opacity 300ms ease-in-out",
            position: "relative", // Added to position the icon buttons
          }}
          onMouseEnter={() => {
            document.querySelectorAll(".icon-button").forEach((button) => {
              button.style.display = "flex"; // Show icon buttons on hover
            });
          }}
          onMouseLeave={() => {
            document.querySelectorAll(".icon-button").forEach((button) => {
              button.style.display = "none"; // Hide icon buttons when not hovering
            });
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => {
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
