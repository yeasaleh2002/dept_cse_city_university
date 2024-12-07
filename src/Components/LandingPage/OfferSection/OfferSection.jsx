import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import { offer_bg } from "../../../assets/images";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const OfferSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${offer_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid2 maxWidth="lg" sx={{paddingX: {xs: 2, md: 4, lg: 0}}} marginX="auto" container spacing={2}>
        <Grid2 size={{ xs: 12, md: 6 }} />
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Box
            maxWidth="sm"
            sx={{
              bgcolor: "#fda31b",
              color: "white",
              padding: 4,
              borderRadius: 15,
              borderBottomLeftRadius: 0,
              px: 6,
              py: 12,
              border: "2.5px solid white",
              boxShadow: "0 0 0 8px #fda31b",
              position: "relative",
              p: 2,
              zIndex: 1,
              mt: -5,
              mb: 1,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -5,
                left: -5,
                right: -5,
                bottom: -5,
                border: "2.5px solid white",
                margin: 0.9,
                borderRadius: 15,
                borderBottomLeftRadius: 0,
                zIndex: -1,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Our 20% Offer Running - Join Today For Your University
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", lineHeight: 1.8, py: 3 }}
            >
              Unlock your potential in Computer Science with our dynamic admission program, where innovation meets opportunity, and your future begins today.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                textTransform: "uppercase",
                color: "black",
                borderRadius: "50px",
                borderBottomLeftRadius: 0,
                padding: "12px 24px",
                fontWeight: "bold",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "#555555",
                  color: "white",
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                },
              }}
              endIcon={<KeyboardArrowRightIcon sx={{ color: "black" }} />}
            >
              Apply Now
            </Button>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OfferSection;
