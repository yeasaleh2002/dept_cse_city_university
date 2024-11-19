import { Box } from '@mui/material';
import React from 'react';
import { AboutInfos, AboutUs } from '../..';
import { about_bg } from '../../../assets/images';

const AboutSection = () => {
  return (
    <Box>
      <Box maxWidth="lg" marginX="auto">
        <AboutUs />
      </Box>
      <Box
        marginX="auto"
        sx={{
          backgroundImage: `url(${about_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mt: 10,
          "::backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },

        }}>
        <Box sx={{ background: "rgba(0, 0, 0, 0.6)" }}>

          <AboutInfos />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
