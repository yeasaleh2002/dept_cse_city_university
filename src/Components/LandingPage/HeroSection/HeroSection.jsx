import React from "react";
import { Box } from "@mui/material";
import { Slider, Activites } from "../..";

const HeroSection = () => {
  return (
    <Box>
      <Slider />
      <Box sx={{ maxWidth: "2000px", marginTop: -12, marginX: "auto" }}>
        <Activites />
      </Box>
    </Box>
  );
};

export default HeroSection;
