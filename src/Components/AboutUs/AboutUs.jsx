import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import Grid from "@mui/material/Grid2";
import { about01, about02, about03 } from "../../assets/images";
import { exchange_idea, global_education, open_book } from "../../assets/icons";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const AboutUs = () => {
  return (
    <Box sx={{ flexGrow: 1, background: "#FFFFFF" }}>
      <Grid container spacing={10}>
        <Grid order={{xs: 2, md: 1}} size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {xs: "column", md: "row"},
              justifyContent: "space-evenly",
              alignItems: {xs: "center", md: "flex-start"},
              gap: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                order: {xs: 2, md: 1},
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box>
                <img
                  src={about01}
                  alt="Student studying"
                  style={{
                    borderRadius: 40,
                    borderBottomLeftRadius: 0,
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Box
                sx={{
                  borderRadius: 40,
                  borderBottomLeftRadius: 0,
                  backgroundColor: "#fda31b",
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 2,
                  }}
                >
                  <img
                    src={exchange_idea}
                    alt="Group discussion"
                    style={{ width: 70, height: 70, margin: 10 }}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#ffffff", fontWeight: "600" }}
                >
                  30 Years Of <br />
                  Quality Service
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                order: {xs: 1, md: 2},
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Box
                sx={{ border: "2px dashed #FDA31B", borderRadius: "50%", p: 1 }}
              >
                <img
                  src={about02}
                  alt="Group discussion"
                  style={{ borderRadius: "50%", width: "100%" }}
                />
              </Box>
              <Box
                sx={{
                  borderRadius: 40,
                  borderBottomLeftRadius: 0,
                }}
              >
                <img
                  src={about03}
                  alt="Study collaboration"
                  style={{
                    borderRadius: 40,
                    borderBottomLeftRadius: 0,
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid order={{xs: 1, md: 2}} size={{ xs: 12, md: 6 }}>
          <Box maxWidth="sm" mx="auto">
            <Typography
              sx={{
                color: "#FDA31B",
                fontWeight: "600",
                borderBottom: "2px #FDA31B solid",
                display: "inline-flex",
                gap: 1,
                alignItems: "center",
              }}
              variant="h6"
            >
              <SchoolIcon sx={{ color: "#FDA31B" }} /> About Us
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", my: 2 }}>
              Our Education System{" "}
              <span style={{ color: "#FDA31B" }}>Inspires</span> You More.
            </Typography>
            <Typography variant="body1" sx={{ color: "#757f95" }}>
              There are many variations of passages available but the majority
              have suffered alteration in some form by injected humour
              randomised words which don't look even slightly believable. If you
              are going to use passage.
            </Typography>
          </Box>
          <Box>
            <Grid container spacing={4} alignItems="flex-end">
              <Grid size={{ xs: 12, md: 7 }} sx={{ mt: 3 }}>
                <Grid alignItems="center" sx={{justifyContent: "center"}} container spacing={3}>
                  <Grid size={{ xs: 6, md: 3 }} sx={{ mt: 3, }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        backgroundColor: "#fda31b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 2,
                        overflow: "hidden",
                        boxShadow: "-4px 5px 0px rgba(0, 0, 0, 0.1)",
                        mx: {xs: "auto", md: 0},
                      }}
                    >
                      <img
                        src={open_book}
                        alt="Group discussion"
                        style={{ width: 50, height: 50, margin: 2 }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, md: 9 }} sx={{ mt: 3 }}>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        Education Services
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#757f95", wordWrap: "break-word" }}
                      >
                        It is a long established fact that reader will to using
                        content.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 6, md: 3 }} sx={{ mt: 3 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        backgroundColor: "#fda31b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 2,
                        overflow: "hidden",
                        boxShadow: "-4px 5px 0px rgba(0, 0, 0, 0.1)",
                        mx: {xs: "auto", md: 0},
                      }}
                    >
                      <img
                        src={global_education}
                        alt="global education"
                        style={{ width: 50, height: 50, margin: 2 }}
                      />
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6, md: 9 }} sx={{ mt: 3 }}>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        International Hubs
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "#757f95", wordWrap: "break-word" }}
                      >
                        It is a long established fact that reader will to using
                        content.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    backgroundColor: "#eaf2f1",
                    borderRadius: 2,
                    padding: 2.5,
                    position: "relative",
                    "&::after": {
                      content: '"”"',
                      position: "absolute",
                      rotate: 180,
                      bottom: -80,
                      right: 10,
                      fontSize: "100px",
                      color: "#aaaaaa",
                      lineHeight: 1,
                    },
                  }}
                >
                  <Typography variant="body1" sx={{ my: 0 }}>
                    It is a long-established fact that a reader will be
                    distracted by the content of a page when looking at its
                    reader for the long words layout.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ my: 5 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: {xs: "center", md: "start"},
              gap: 3,
              alignItems: "center",
            }}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FDA31B",
                  color: "white",
                  borderRadius: "50px",
                  borderBottomLeftRadius: 0,
                  padding: "12px 24px",
                  fontWeight: "bold",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundColor: "#C68A1B",
                  },
                }}
                endIcon={<KeyboardArrowRightIcon sx={{ color: "white" }} />}
              >
                Discover More
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  backgroundColor: "#116e63",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 2,
                }}
              >
                <SupportAgentIcon sx={{ color: "#FFFFFF" }} fontSize="large" />
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "600", color: "#fda31b" }}
                >
                  Call Now
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "600", color: "#116e63", fontSize: 18 }}
                >
                  +880 123 654 7898
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
