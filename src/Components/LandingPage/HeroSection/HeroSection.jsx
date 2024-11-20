import React from "react";
import { Box } from "@mui/material";
import { Slider, Activites } from "../..";

const HeroSection = () => {
  return (
    <Box>
      <Slider />
      <Box maxWidth="xl" marginLeft="auto" marginTop={-12}>
        <Activites />
      </Box>
    </Box>
  );
};

export default HeroSection;
