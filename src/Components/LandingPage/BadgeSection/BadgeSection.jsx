import React, { useEffect, useState } from "react";
import { Box, Grid2, useMediaQuery, useTheme } from "@mui/material";
import { badge1, badge2, badge3, badge4 } from "../../../assets/images";

const badges = [
  { id: 1, image: badge1 },
  { id: 2, image: badge2 },
  { id: 3, image: badge3 },
  { id: 4, image: badge4 },
];

const BadgeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const breakpoints = {
    xSmall: useMediaQuery(theme.breakpoints.down("sm")),
    small: useMediaQuery(theme.breakpoints.down("md")),
    medium: useMediaQuery(theme.breakpoints.down("lg")),
    large: useMediaQuery(theme.breakpoints.up("lg"))
  };
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransition(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % badges.length);
      setTimeout(() => setTransition(false), 400); 
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const displayCount = breakpoints.xSmall ? 2 : breakpoints.small ? 3 : breakpoints.medium ? 4 : 6;

  return (
    <Box sx={{ backgroundColor: "#f2f3f5", paddingY: 5 }}>
      <Box
        maxWidth="lg"
        marginX="auto"
        sx={{ paddingX: { xs: 2, md: 4, lg: 0 } }}
      >
        <Grid2 container spacing={3}>
          {Array.from({ length: displayCount }).map((_, i) => {
            const badgeIndex = (currentIndex + i) % badges.length;
            return (
              <Grid2 
                key={`${badges[badgeIndex].id}-${i}`}
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }} 
                sx={{ 
                  transition: "transform 1s ease-in-out, opacity 1s ease-in-out",  
                  opacity: transition ? 0.7 : 1 
                }}
              >
                <img
                  width="100%"
                  height="auto"
                  src={badges[badgeIndex].image}
                  alt={`badge-${badges[badgeIndex].id}`}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
};

export default BadgeSection;
