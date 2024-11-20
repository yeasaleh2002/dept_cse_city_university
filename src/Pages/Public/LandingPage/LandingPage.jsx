import React from "react";
import {
  AboutSection,
  CheckCourses,
  HeroSection,
  LatestVideoSection,
  MeetTeacherSection,
  OurGoalSection,
  PhotoGallerySection,
} from "../../../Components";
import { Box } from "@mui/material";

const LandingPage = () => (
  <Box>
    <Box display="flex" flexDirection="column" gap={10}>
      <HeroSection />
      <AboutSection />
      <CheckCourses />
      <LatestVideoSection />
      <MeetTeacherSection />
      <OurGoalSection />
      <PhotoGallerySection />
    </Box>
  </Box>
);

export default LandingPage;
