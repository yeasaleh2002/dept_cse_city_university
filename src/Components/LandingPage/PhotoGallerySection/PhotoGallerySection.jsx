import React from "react";
import { Avatar, Box, Grid2, Typography } from "@mui/material";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from "../../../assets/images";
import SchoolIcon from "@mui/icons-material/School";

const PhotoGallerySection = () => {
  return (
    <Box maxWidth="lg" sx={{paddingX: {xs: 2, md: 4, lg: 0}, mb: 10}} marginX="auto">
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
          <SchoolIcon sx={{ color: "#FDA31B" }} /> Gallery
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", my: 2 }}>
          Our Photo <span style={{ color: "#FDA31B" }}>Gallery</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "#757f95" }}>
          Our Computer Science Department's photo gallery showcases the vibrant community and engaging activities that foster learning and innovation. Explore moments from workshops, guest lectures, and collaborative projects that highlight our commitment to excellence in education.
        </Typography>
      </Box>
      <Grid2 container spacing={3}>
        <Grid2 size={{ md: 12, lg: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Avatar
              sx={{ width: "100%", height: "auto", borderRadius: 10, borderBottomLeftRadius: 0 }}
              src={gallery1}
              alt="gallery1"
            />
            <Avatar
              sx={{ width: "100%", height: "auto", borderRadius: 10, borderBottomLeftRadius: 0 }}
              src={gallery2}
              alt="gallery2"
            />
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Avatar
              sx={{ width: "100%", height: "auto", borderRadius: 10, borderBottomLeftRadius: 0 }}
              src={gallery3}
              alt="gallery3"
            />
            <Avatar
              sx={{ width: "100%", height: "auto", borderRadius: 10, borderBottomLeftRadius: 0 }}
              src={gallery4}
              alt="gallery4"
            />
          </Box>
        </Grid2>
        <Grid2 size={{ md: 12, lg: 4 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Avatar
              sx={{ width: "100%", height: "auto", borderRadius: 10, borderBottomLeftRadius: 0 }}
              src={gallery5}
              alt="gallery5"
            />
            <Avatar
              sx={{ width: "100%", height: "auto", borderRadius: 10, borderBottomLeftRadius: 0 }}
              src={gallery6}
              alt="gallery6"
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PhotoGallerySection;
