import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  Email,
  LocationOn,
  Phone,
  Facebook,
  LinkedIn,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { logo_main } from "../../assets/logos";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#00214D", color: "white", padding: "40px 20px" }}
    >
      <Box
        maxWidth="lg"
        marginX="auto"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box sx={{ flex: "1 1 250px" }}>
          <Link
            style={{
              display: "inline-block",
              textDecoration: "none",
              backgroundColor: "white",
              padding: "2px 15px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
            to="/"
          >
            <img src={logo_main} alt="logo" style={{ width: "100px" }} />
          </Link>
          
          <Typography variant="body2" sx={{ mb: 2 }}>
            Welcome to City University, Ashuliya Savar. We are dedicated to
            providing quality education and fostering a vibrant learning
            community.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Phone sx={{ color: "#FDA31B", mr: 1 }} />
            <Typography variant="body2">+2 123 654 7898</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <LocationOn sx={{ color: "#FDA31B", mr: 1 }} />
            <Typography variant="body2">
              City University, Ashuliya Savar
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Email sx={{ color: "#FDA31B", mr: 1 }} />
            <Typography variant="body2">info@cityuniversity.edu</Typography>
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 200px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <List sx={{ padding: 0 }}>
            {[
              { name: "About Us", path: "/about-us" },
              { name: "FAQ's", path: "/faq" },
              // { name: "Testimonials", path: "/testimonials" },
              { name: "Terms Of Service", path: "/terms-and-conditions" },
              { name: "Privacy Policy", path: "/privacy-policy" },
              // { name: "Update News", path: "/update-news" },
            ].map(({ name, path }) => (
              <ListItem key={name} disableGutters>
                <Link to={path} style={{ textDecoration: "none" }}>
                  <ListItemText
                    primary={name}
                    sx={{
                      color: "white",
                      "&:hover": { color: "#FDA31B" },
                      cursor: "pointer",
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* <Box sx={{ flex: '1 1 200px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Our Campus
          </Typography>
          <List sx={{ padding: 0 }}>
            {[
              'Campus Safety',
              'Student Activities',
              'Academic Department',
              'Planning & Administration',
              'Office Of The Chancellor',
              'Facility Services',
            ].map((text) => (
              <ListItem key={text} disableGutters>
                <ListItemText
                  primary={
                    <Link href="#" underline="none" sx={{ color: 'white', '&:hover': { color: '#FDA31B' } }}>
                      {text}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box> */}

        <Box sx={{ flex: "1 1 250px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            We would love to hear from you! Reach out to us for any inquiries.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
            <TextField
              placeholder="Your Name"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  // borderRadius: '20px',
                },
              }}
              inputProps={{ "aria-label": "Your Name" }}
              id="name-input"
            />
            <TextField
              placeholder="Your Email"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                backgroundColor: "white",
                "& .MuiOutlinedInput-root": {
                  // borderRadius: '20px',
                },
              }}
              inputProps={{ "aria-label": "Your Email" }}
              id="email-input"
            />
          </Box>
          <TextField
            placeholder="Your Message"
            variant="outlined"
            size="small"
            multiline
            rows={4}
            sx={{
              width: "100%",
              backgroundColor: "white",
              "& .MuiOutlinedInput-root": {
                // borderRadius: '20px',
              },
            }}
            inputProps={{ "aria-label": "Your Message" }}
            id="message-input"
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FDA31B",
              color: "white",
              borderRadius: "20px",
              mt: 2,
              "&:hover": { backgroundColor: "#D9912B" },
            }}
            onClick={() => {
              document.getElementById("name-input").value = "";
              document.getElementById("email-input").value = "";
              document.getElementById("message-input").value = "";
            }}
          >
            Send Message
          </Button>
        </Box>

        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            mt: 4,
            pt: 2,
            borderTop: "1px solid #344869",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} All Rights Reserved to <a href="https://computerclub-cityuniversity.netlify.app/developers" target="_blank" style={{ color: "#FDA31B", fontWeight: "bold", textDecoration: "none" }}>Developers Team</a>.
          </Typography>
          <Box>
            <a href="https://city-uni-dpt-api.onrender.com/admin">
              <Button style={{ color: "#FDA31B", fontWeight: "bold" }}>
                Admin
              </Button>{" "}
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
