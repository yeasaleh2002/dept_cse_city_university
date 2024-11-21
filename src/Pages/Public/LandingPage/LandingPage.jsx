import React from "react";
import {
  AboutSection,
  CheckCoursesSection,
  HeroSection,
  LatestVideoSection,
  MeetTeacherSection,
  OurGoalSection,
  PhotoGallerySection,
  OfferSection,
  EventsSection,
  ReviewSection,
  NewsSection,
} from "../../../Components";
import { Box } from "@mui/material";

const LandingPage = () => (
  <Box>
    <Box display="flex" flexDirection="column" gap={10}>
      <HeroSection />
      <AboutSection />
      <CheckCoursesSection />
      <LatestVideoSection />
      <MeetTeacherSection />
      <OurGoalSection />
      <PhotoGallerySection />
      <OfferSection />
      <EventsSection />
      <ReviewSection />
      <NewsSection />
    </Box>
  </Box>
);

export default LandingPage;
