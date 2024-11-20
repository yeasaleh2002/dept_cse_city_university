import {
  Box,
  Typography,
  Rating,
  Avatar,
  Stack,
} from "@mui/material";

const ReviewCard = ({ name, role, review, rating, image }) => {
  return (
    <Box
      sx={{
        boxShadow: 5,
        borderBottom: "5px solid #fda31b",
        borderRadius: 10,
        borderBottomLeftRadius: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          padding: 2.5,
          position: "relative",
          borderRadius: 10,
          borderBottomLeftRadius: 0,
          "&::after": {
            content: '"”"',
            position: "absolute",
            top: 0,
            right: 0,
            fontSize: "70px",
            backgroundColor: "#fda31b",
            textAlign: "center",
            color: "white",
            lineHeight: 1.1,
            height: "40px",
            width: "40px",
            borderRadius: 10,
            borderBottomLeftRadius: 0,
          },
        }}
      >
        <Rating name="read-only" value={rating} readOnly />
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "600",
            color: "#757f95",
            fontStyle: "italic",
            my: 2,
          }}
        >
          {review}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ my: 1, gap: 2 }}
        >
          <Box sx={{ p: 0.5, border: "2px dashed #fda31b", borderRadius: 10 }}>
            <Avatar
              sx={{ width: 60, height: 60 }}
              src={image}
              alt="student image"
            />
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color="black"
              sx={{ fontWeight: "600" }}
            >
              {name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#fda31b", fontWeight: "600" }}
            >
              {role}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default ReviewCard;
