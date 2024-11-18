import React from 'react';
import { Box, Typography, TextField, Button, Link, List, ListItem, ListItemText } from '@mui/material';
import { Email, LocationOn, Phone, Facebook, LinkedIn, WhatsApp, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#00214D', color: 'white', padding: '40px 20px' }}>
      <Box
        maxWidth="lg"
        marginX="auto"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Box sx={{ flex: '1 1 250px' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            <span style={{ color: '#FDA31B' }}>edu</span>ka
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Phone sx={{ color: '#FDA31B', mr: 1 }} />
            <Typography variant="body2">+2 123 654 7898</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <LocationOn sx={{ color: '#FDA31B', mr: 1 }} />
            <Typography variant="body2">25/B Milford Road, New York</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Email sx={{ color: '#FDA31B', mr: 1 }} />
            <Typography variant="body2">info@example.com</Typography>
          </Box>
        </Box>

        <Box sx={{ flex: '1 1 200px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Quick Links
          </Typography>
          <List sx={{ padding: 0 }}>
            {['About Us', "FAQ's", 'Testimonials', 'Terms Of Service', 'Privacy Policy', 'Update News'].map((text) => (
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
        </Box>

        <Box sx={{ flex: '1 1 200px' }}>
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
        </Box>

        <Box sx={{ flex: '1 1 250px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Subscribe Our Newsletter To Get Latest Update And News
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField
              placeholder="Your Email"
              variant="outlined"
              size="small"
              sx={{
                flex: 1,
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FDA31B',
                color: 'white',
                borderRadius: '20px',
                '&:hover': { backgroundColor: '#D9912B' },
              }}
            >
              Subscribe Now
            </Button>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
            <Facebook sx={{ fontSize: 32, cursor: 'pointer', '&:hover': { color: '#FDA31B' } }} />
            <LinkedIn sx={{ fontSize: 32, cursor: 'pointer', '&:hover': { color: '#FDA31B' } }} />
            <WhatsApp sx={{ fontSize: 32, cursor: 'pointer', '&:hover': { color: '#FDA31B' } }} />
            <YouTube sx={{ fontSize: 32, cursor: 'pointer', '&:hover': { color: '#FDA31B' } }} />
          </Box>
        </Box>

        <Box sx={{ width: '100%', textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid #344869' }}>
          <Typography variant="body2">
            &copy; Copyright 2024{' '}
            <span style={{ color: '#FDA31B', fontWeight: 'bold' }}>Eduka</span> All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;