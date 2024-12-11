import React from 'react';
import { Box, Typography } from '@mui/material';

const TeacherNotification = () => {
    const notifications = [
        { id: 1, message: "Class test scheduled for next week." },
        { id: 2, message: "New lab report assignment posted." },
        // Add more notifications as needed
    ];

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Notifications</Typography>
            {notifications.map(notification => (
                <Typography key={notification.id} variant="body1">{notification.message}</Typography>
            ))}
        </Box>
    );
};

export default TeacherNotification; 