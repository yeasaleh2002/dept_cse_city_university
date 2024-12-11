import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const LatestVideoSection = () => {
  return (
    <Box maxWidth="lg" sx={{paddingX: {xs: 2, md: 4, lg: 0},mb: 10 }} marginX="auto">
      <Grid2 container alignItems="center" spacing={5}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Box sx={{ gap: 2 }}>
            <Typography
              sx={{
                color: "#FDA31B",
                fontWeight: 600,
                borderBottom: "2px solid #FDA31B",
                display: "inline-flex",
                gap: 1,
                alignItems: "center",
              }}
              variant="h6"
            >
              <SchoolIcon sx={{ color: "#FDA31B" }} />
              Latest Video
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", my: 1.5 }}>
              Let's Check Our <span style={{ color: "#FDA31B" }}>Latest</span>{" "}
              Video
            </Typography>
            <Typography variant="body1" sx={{ color: "#757f95" }}>
              Our university is excited to introduce a range of new features designed to enhance the student experience. From state-of-the-art learning facilities to innovative online resources, we are committed to providing an environment that fosters academic excellence and personal growth. Explore our new interactive learning platforms, updated course offerings, and enhanced support services that ensure every student has the tools they need to succeed.
            </Typography>
            {/* <Button
              variant="contained"
              sx={{
                backgroundColor: "#FDA31B",
                color: "white",
                borderRadius: 10,
                borderBottomLeftRadius: 0,
                padding: "12px 24px",
                fontWeight: "bold",
                my: 3,
                "&:hover": {
                  backgroundColor: "#C68A1B",
                },
              }}
              endIcon={<KeyboardArrowRightIcon sx={{ color: "white" }} />}
            >
              Learn More
            </Button> */}
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
              borderBottomLeftRadius: 0,
              overflow: "hidden",
            }}
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/WD3sAN3oV3A?si=7sONoBK931fuyvT0&rel=0&modestbranding=1&showinfo=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default LatestVideoSection;
