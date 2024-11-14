import React, { useState, useEffect } from 'react';
import { IconButton, Typography, Button, Box } from '@mui/material';
import {ArrowBackIosIcon, ArrowForwardIosIcon} from '@mui/icons-material';
import { Slide_1, Slide_2, Slide_3 } from '../../assets/images';
// import { Slide_1, Slide_2, Slide_3 } from '../../assets/images';

const slides = [
  {
    id: 1,
    image: Slide_1,
    heading: 'Welcome to Slide 1',
  },
  {
    id: 2,
    image: Slide_2,
    heading: 'Explore Slide 2',
  },
  {
    id: 3,
    image: Slide_3,
    heading: 'Discover Slide 3',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide change every 5 seconds
  useEffect(() => {
    const slideTimer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(slideTimer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '600px',
        overflow: 'hidden',
      }}
    >
 
      <Box
        sx={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(5px)',
          boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      />

    
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: slides[currentSlide].id % 2 === 0 ? 'flex-start' : 'flex-end',
          height: '100%',
          padding: '0 40px',
        }}
      >
        <Box
          sx={{
            maxWidth: '600px',
            color: 'white',
            textAlign: slides[currentSlide].id % 2 === 0 ? 'left' : 'right',
          }}
        >
          <Typography variant="h2" fontWeight="bold" mb={2}>
            {slides[currentSlide].heading}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Learn More
          </Button>
          <Button variant="outlined" color="secondary">
            Contact Us
          </Button>
        </Box>
      </Box>
 
      <IconButton
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          color: 'white',
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Slider;
