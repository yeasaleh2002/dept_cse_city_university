import React, { Suspense } from 'react';
import Slider from '../../Slider/Slider';
import { Box } from '@mui/material';
import Activites from '../../Activities/Activites';
// import { Slider } from '../..';
// import Slider from '../../Slider';

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