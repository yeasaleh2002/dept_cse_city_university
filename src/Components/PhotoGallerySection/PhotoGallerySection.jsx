import React from "react";
import { Avatar, Box, Grid2, Typography } from "@mui/material";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
} from "../../assets/images";
import SchoolIcon from "@mui/icons-material/School";

const PhotoGallerySection = () => {
  return (
    <Box maxWidth="lg" mx="auto" sx={{ mb: 10 }}>
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
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
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
