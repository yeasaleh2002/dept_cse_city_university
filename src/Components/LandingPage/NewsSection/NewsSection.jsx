import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { news1, news2, news3 } from "../../../assets/images";
import { NewsCard } from "../..";

const blogPosts = [
  {
    id: 1,
    date: "June 18, 2024",
    author: "By Alicia Davis",
    commentsCount: "03 Comments",
    title: "There Are Many Variations Passage Have Suffered Available.",
    image: news1,
  },
  {
    id: 2,
    date: "June 18, 2024",
    author: "By Alicia Davis",
    commentsCount: "03 Comments",
    title: "There Are Many Variations Passage Have Suffered Available.",
    image: news2,
  },
  {
    id: 3,
    date: "June 18, 2024",
    author: "By Alicia Davis",
    commentsCount: "03 Comments",
    title: "There Are Many Variations Passage Have Suffered Available.",
    image: news3,
  },
];

const NewsSection = () => {
  return (
    <Box
      sx={{ paddingX: { xs: 2, md: 4, lg: 0 }, position: "relative", mb: 10 }}
      maxWidth="lg"
      mx="auto"
    >
      <Box maxWidth="sm" marginX="auto" sx={{ pb: 5, textAlign: "center" }}>
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
          <SchoolIcon sx={{ color: "#FDA31B" }} /> Our Blog
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", my: 2 }}>
          Latest News &<span style={{ color: "#FDA31B" }}> Blog</span>
        </Typography>
        <Typography variant="body1" sx={{ color: "#757f95" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Typography>
      </Box>

      <Grid2 container spacing={3}>
        {blogPosts.map((post) => (
          <Grid2 item size={{ sm: 12, md: 6, lg: 4 }} key={post.id}>
            <NewsCard {...post} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default NewsSection;
