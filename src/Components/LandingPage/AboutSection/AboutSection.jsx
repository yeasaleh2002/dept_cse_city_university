import { Box } from '@mui/material';
import React from 'react';
import { AboutInfos, AboutUs } from '../..';

const AboutSection = () => {
  return (
    <Box>
      <Box maxWidth="lg" marginX="auto">
        <AboutUs />
        <AboutInfos />
      </Box>
    </Box>
  );
};

export default AboutSection;
