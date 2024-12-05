import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetch("https://city-uni-dpt-api.onrender.com/notification/announcements/")
            .then((res) => res.json())
            .then((data) => setAnnouncements(data));
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Announcements
            </Typography>
            <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
                {announcements.length > 0 ? (
                    announcements.map((announcement) => (
                        <Card key={announcement.id} style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
                            <CardContent>
                                <Typography variant="h6" component="h2">
                                    {announcement.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Created At: {new Date(announcement.created_at).toLocaleString()}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={announcement.pdf_file}
                                    target="_blank"
                                    sx={{ mt: 2, bgcolor: "#FFA726", px: 4 }}
                                >
                                    View PDF
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography>No announcements available.</Typography>
                )}
            </div>
        </div>
    );
};

export default Announcements;
