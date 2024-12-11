import { Box, Typography, Avatar, Divider } from "@mui/material";

const TeacherCard = ({ name, subject, designation, image }) => {
  return (
    <Box
      sx={{
        width: "auto",
        boxShadow: 5,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "auto",
          borderRadius: "10px",
          overflow: "hidden",
          padding: 2,
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
      </Box>
      <Box sx={{ px: 3, py: 2, pt: 0 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "600", color: "#333" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="#757f95"
          sx={{ fontWeight: 500, mb: 1 }}
        >
          {subject}
        </Typography>
        <Divider />
        <Typography
          variant="subtitle1"
          color="#757f95"
          sx={{ fontWeight: 600, mt: 1 }}
        >
          {designation}
        </Typography>
      </Box>
    </Box>
  );
};

export default TeacherCard;
