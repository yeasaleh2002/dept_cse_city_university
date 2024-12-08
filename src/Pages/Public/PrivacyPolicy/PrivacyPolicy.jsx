import React from "react";
import { BreadcrumbsComponent } from "../../../Components"; // Assuming this is where your Breadcrumb component is located
import {
  Typography,
  Box,
  Paper,
  Divider,
  Button,
  Link as MuiLink,
} from "@mui/material";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ];

  return (
    <Box>
      <BreadcrumbsComponent title="Privacy Policy" breadcrumbs={breadcrumbs} />
      <Box maxWidth="lg" marginX="auto" sx={{ padding: 2 }}>
        <Box sx={{ mt: 4 }}>
          <Paper elevation={6} sx={{ padding: 4, backgroundColor: "#f9f9f9" }}>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              color="#FFA726"
            >
              Privacy Policy
            </Typography>

            <Typography variant="body1" paragraph>
              Welcome to the Department of Computer Science and Engineering
              (CSE) at City University. We value your privacy, and this Privacy
              Policy outlines how we collect, use, and protect your personal
              data when you access or use our website. Please read the following
              information carefully.
            </Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" gutterBottom color="secondary">
              1. Information Collection
            </Typography>
            <Typography variant="body1" paragraph>
              We collect personal information when you use our website, such as
              your name, email address, and any other data you provide through
              forms or interactions on the site. This data is collected for the
              purpose of providing and improving our services to you.
            </Typography>

            <Typography variant="h5" gutterBottom color="secondary">
              2. Use of Information
            </Typography>
            <Typography variant="body1" paragraph>
              The personal data we collect is used to improve our website's
              functionality, offer relevant content, and communicate with you
              regarding updates or changes to the services we offer. We may also
              use your data for analytics and to enhance user experience.
            </Typography>

            <Typography variant="h5" gutterBottom color="secondary">
              3. Data Protection
            </Typography>
            <Typography variant="body1" paragraph>
              We take reasonable measures to protect your personal data from
              unauthorized access, alteration, or destruction. However, no
              method of transmission over the internet is 100% secure, and while
              we strive to protect your information, we cannot guarantee
              absolute security.
            </Typography>

            <Typography variant="h5" gutterBottom color="secondary">
              4. Sharing Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We do not sell, trade, or rent your personal data to third
              parties. However, we may share your data with trusted third
              parties for purposes such as website maintenance or analytics,
              under strict confidentiality agreements.
            </Typography>

            <Typography variant="h5" gutterBottom color="secondary">
              5. Cookies
            </Typography>
            <Typography variant="body1" paragraph>
              Our website may use cookies to improve user experience. Cookies
              are small files stored on your device that help us remember your
              preferences and analyze how the website is used. You can control
              the use of cookies through your browser settings.
            </Typography>

            <Typography variant="h5" gutterBottom color="secondary">
              6. Changes to this Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We reserve the right to update this Privacy Policy at any time.
              Any changes will be reflected on this page with an updated
              revision date. We encourage you to review this policy periodically
              to stay informed about how we are protecting your information.
            </Typography>

            <Typography variant="h5" gutterBottom color="secondary">
              7. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions or concerns about this Privacy Policy or
              how we handle your personal information, please feel free to
              contact us. You can reach us via email or visit the "Contact Us"
              page for more details.
            </Typography>

            <MuiLink
              component={Link}
              to="/about-us"
              sx={{ display: "block", textAlign: "center", marginTop: 2 }}
            >
              <Button variant="outlined" color="primary">
                Learn More About Us
              </Button>
            </MuiLink>

            <Divider sx={{ my: 3 }} />

            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button
                variant="contained"
                href="/"
                sx={{ width: "200px", backgroundColor: "#FFA726" }}
              >
                Go Back
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
