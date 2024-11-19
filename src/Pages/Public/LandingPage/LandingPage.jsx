import React from 'react';
import { AboutSection, HeroSection } from '../../../Components';
import { Box } from '@mui/material';

const LandingPage = () => (
  <Box>
    <Box display="flex" flexDirection="column" gap={10}>
      <HeroSection />
      <AboutSection />
    </Box>
  </Box>
);

export default LandingPage;