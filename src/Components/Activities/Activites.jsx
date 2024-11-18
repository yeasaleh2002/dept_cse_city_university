import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { library, money, scholarship, teacher } from '../../assets/icons';

const items = [
  {
    id: "01",
    title: "Scholarship Facility",
    description: "It is a long established fact that a reader will be distracted.",
    icon: scholarship
  },
  {
    id: "02",
    title: "Skilled Lecturers",
    description: "It is a long established fact that a reader will be distracted.",
    icon: teacher
  },
  {
    id: "03",
    title: "Book Library Facility",
    description: "It is a long established fact that a reader will be distracted.",
    icon: library
  },
  {
    id: "04",
    title: "Affordable Price",
    description: "It is a long established fact that a reader will be distracted.",
    icon: money
  },
];

const Activites = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 3,
      paddingX: 5
    }}
  >
    {items.map(item => (
      <Card
        key={item.id}
        sx={{
          padding: 3,
          borderRadius: 10,
          borderBottomLeftRadius: 0,
        }}
      >
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: '#116e63',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 2,
            }}
          >
            <img src={item.icon} alt={item.title} style={{ width: 50, height: 50, margin: 10 }} />
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: '50px',
              fontWeight: 800,
              WebkitTextStroke: '2px #116e63',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {item.id}
          </Typography>
        </Box>

        <Box>
          <Typography variant="subtitle1" sx={{ color: '#116e63', fontWeight: "600" }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#116e63', fontWeight: "medium" }}>
            {item.description}
          </Typography>
        </Box>
      </Card>
    ))}
  </Box>
);

export default Activites;