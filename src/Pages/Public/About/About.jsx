import React from "react";
import { AboutUs, BreadcrumbsComponent } from "../../../Components";
import { Box } from "@mui/material";

const About = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "About Us", link: "/about-us" },
  ];

  return (
    <div>
      <BreadcrumbsComponent title="About Us" breadcrumbs={breadcrumbs} />
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          maxWidth: "lg",
          px: { xs: 2, md: 4 },
          mx: "auto",
        }}
      >
        <AboutUs />
      </Box>
    </div>
  );
};

export default About;
