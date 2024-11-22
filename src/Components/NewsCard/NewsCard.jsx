import { Avatar, Box, Chip, Divider, Stack, Typography, Button } from "@mui/material";
import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const NewsCard = ({ date, author, commentsCount, title, image }) => {
  console.log({ date, author, commentsCount, title, image });
  if (typeof image !== "string") {
    console.error("Image source must be a string URL", image);
  }
  return (
    <Box
      sx={{
        width: "auto",
        boxShadow: 4,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "10px",
          overflow: "hidden",
          padding: 2,
          position: "relative",
          paddingBottom: 1,
        }}
      >
        <Avatar
          src={image}
          alt="Course"
          sx={{
            borderRadius: 10,
            borderBottomLeftRadius: 0,
            width: "100%",
            height: "auto",
          }}
        />
        <Chip
          icon={<CalendarMonthOutlinedIcon sx={{ fill: "#FFFFFF" }} />}
          label={date}
          sx={{
            mb: 1,
            fontWeight: "bold",
            position: "absolute",
            top: 40,
            right: 3,
            bgcolor: "#fda31b",
            color: "#fff",
          }}
        />
      </Box>
      <Box sx={{ px: 3, py: 1, pt: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
            <AccountCircleOutlinedIcon
              fontSize="small"
              sx={{ fill: "#fda31b" }}
            />
            <Typography
              variant="subtitle2"
              color="black"
              sx={{ fontWeight: "600" }}
            >
              {author}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ my: 1 }}>
            <QuestionAnswerRoundedIcon
              fontSize="small"
              sx={{ fill: "#fda31b" }}
            />
            <Typography
              variant="subtitle2"
              color="black"
              sx={{ fontWeight: "600" }}
            >
              {commentsCount}
            </Typography>
          </Stack>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "600", color: "#333", fontSize: "1.2rem" }}
        >
          {title}
        </Typography>
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#FDA31B",
            color: "white",
            borderRadius: "50px",
            my: 2,
            borderBottomLeftRadius: 0,
            padding: "10px 20px",
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden",
            "&:hover": {
              backgroundColor: "#C68A1B",
            },
          }}
          endIcon={<KeyboardArrowRightIcon sx={{ color: "white" }} />}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default NewsCard;

