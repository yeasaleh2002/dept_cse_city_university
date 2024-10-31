import React from "react";
import { Breadcrumbs, Link, Typography, Container, Box } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { breadcrumbsBg } from "../../assets/images";

const BreadcrumbsComponent = ({ title, breadcrumbs }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${breadcrumbsBg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#3B302A",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        py: 8,
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ display: "flex", justifyContent: "center", color: "#fff" }}
        >
          {breadcrumbs.map((breadcrumb, index) =>
            index < breadcrumbs.length - 1 ? (
              <Link
                key={breadcrumb.title}
                onClick={() => navigate(breadcrumb.link)}
                sx={{ color: "#fff", cursor: "pointer" }}
                underline="hover"
              >
                {breadcrumb.title}
              </Link>
            ) : (
              <Typography key={breadcrumb.title} color="#FDA31B">
                {breadcrumb.title}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default BreadcrumbsComponent;
