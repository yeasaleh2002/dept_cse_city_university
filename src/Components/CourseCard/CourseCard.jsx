import React from 'react';
import { Box, Typography, Chip, Stack, Rating, Avatar, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const CourseCard = ({ category, title, description, lessons, rating, duration, price, image, seats }) => {
  return (
    <Box sx={{ width: "auto", boxShadow: 5, borderRadius: 10, borderBottomLeftRadius: 0 }}>

      <Box sx={{ width: '100%', height: 'auto', borderRadius: '10px', overflow: 'hidden', padding: 2, position: 'relative', paddingBottom: 1 }}>
        <Avatar
          src={image}
          alt="Course"
          sx={{ borderRadius: 10, borderBottomLeftRadius: 0, width: '100%', height: 'auto' }}
        />
        <Chip
          icon={<BookmarkBorderOutlinedIcon sx={{ fill: "#FFFFFF" }} />}
          label={category}
          sx={{
            mb: 1,
            fontWeight: 'bold',
            position: 'absolute',
            top: 40,
            right: 3,
            bgcolor: "#fda31b",
            color: "#fff"
          }}
        />
      </Box>
      <Box sx={{ px: 3, py: 2, pt: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
            <SchoolIcon color="action" />
            <Typography variant="subtitle1" color="#757f95" sx={{ fontWeight: '600' }}>{lessons} Lessons</Typography>
          </Stack>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="read-only" value={rating} readOnly />
            <Typography variant="subtitle1" color="#757f95" sx={{ fontWeight: '600', mt: 0.3 }}>({rating})</Typography>
          </Box>
        </Box>
        <Typography variant="h6" component="div" sx={{ fontWeight: '600', color: '#333', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="#757f95" sx={{ mb: 2, lineHeight: 1.8, fontWeight: 500 }}>
          {description}
        </Typography>
        <Divider />
        <Box
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, my: 1 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
              <GroupsOutlinedIcon sx={{ fill: '#fda31b' }} />
              <Typography variant="subtitle2" color="#757f95" sx={{ fontWeight: '600', mt: 0.5, whiteSpace: 'nowrap' }}>
                {seats} Seats
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
              <AccessTimeIcon sx={{ fill: '#fda31b' }} />
              <Typography variant="subtitle2" color="#757f95" sx={{ fontWeight: '600', mt: 0.5, whiteSpace: 'nowrap' }}>
                {duration}
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ alignSelf: "end", fontWeight: '600', color: '#FFFFFF', bgcolor: '#fda31b', px: 2, py: 1, borderRadius: 10, borderBottomLeftRadius: 0, ml: 5 }}>
              ${price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;