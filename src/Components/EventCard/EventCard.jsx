import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const EventCard = ({ title, date, time, location, description, imageUrl }) => {
  return (
    <Box
      sx={{
        width: "auto",
        boxShadow: 4,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ padding: 2, paddingBottom: 0 }}
      >
        <LocationOnIcon sx={{ fill: "#fda31b" }} />
        <Typography variant="subtitle1" color="#757f95">
          {location}
        </Typography>
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          overflow: "hidden",
          padding: 2,
          position: "relative",
          paddingBottom: 1,
        }}
      >
        <Avatar
          src={imageUrl}
          alt="Course"
          sx={{
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Box sx={{ px: 3, py: 2, pt: 0 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
            <CalendarMonthIcon sx={{ fill: "#fda31b" }} />
            <Typography variant="subtitle1" color="#757f95">
              {date}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
            <AccessTimeIcon sx={{ fill: "#fda31b" }} />
            <Typography variant="subtitle1" color="#757f95">
              {time}
            </Typography>
          </Stack>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "600", color: "#333", mb: 1 }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="#757f95"
          sx={{ mb: 2, lineHeight: 1.8, fontWeight: 500 }}
        >
          {description}
        </Typography>
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
      </Box>
    </Box>
  );
};

export default EventCard;
