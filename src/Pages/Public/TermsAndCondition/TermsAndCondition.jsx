import React from "react";
import { BreadcrumbsComponent } from "../../../Components"; 
import {
  Typography,
  Box,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Terms and Conditions", link: "/terms-and-conditions" },
  ];

  return (
    <Box>
      <BreadcrumbsComponent
        title="Terms and Conditions"
        breadcrumbs={breadcrumbs}
      />
      <Box maxWidth="lg" marginX="auto">
        <Box sx={{ mt: 2, mb: 4 }}>
          <Box>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography sx={{ fontWeight: "700" }} variant="body1" paragraph>
                Welcome to the Department of Computer Science and Engineering
                (CSE) at City University. By accessing or using this website,
                you agree to comply with and be bound by the following terms and
                conditions. Please read them carefully before continuing to use
                our website. These terms apply to all visitors, users, and
                others who access or use the service.
              </Typography>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                1. Acceptance of Terms
              </Typography>
              <Typography variant="body1" paragraph>
                By accessing or using our website, you acknowledge that you have
                read, understood, and agree to be bound by these Terms and
                Conditions. If you do not agree with any part of these terms,
                please do not use our website. The Department of CSE reserves
                the right to update or modify these terms at any time without
                prior notice. Any such changes will be reflected here.
              </Typography>

              <Typography variant="h6" gutterBottom>
                2. User Responsibility
              </Typography>
              <Typography variant="body1" paragraph>
                As a user of this website, you are responsible for ensuring that
                any activity you engage in on the website complies with all
                applicable laws and regulations. This includes respecting the
                intellectual property rights of others and refraining from any
                unauthorized access or misuse of the site. Any violation of
                these responsibilities may lead to termination of access to the
                website without notice.
              </Typography>

              <Typography variant="h6" gutterBottom>
                3. Privacy Policy
              </Typography>
              <Typography variant="body1" paragraph>
                We take your privacy seriously. Any personal data collected on
                our website will be handled according to our Privacy Policy.
                This policy outlines how we collect, use, and protect your
                personal information. By using our website, you consent to the
                collection and use of information in accordance with our Privacy
                Policy. Please review the policy for detailed information.
              </Typography>

              <Typography variant="h6" gutterBottom>
                4. Restrictions on Use
              </Typography>
              <Typography variant="body1" paragraph>
                You may not use this website for illegal purposes or in a way
                that could harm, disable, or impair the operation of the website
                or its services. Additionally, you may not attempt to gain
                unauthorized access to the website or other users’ accounts or
                data. This includes, but is not limited to, the use of malware,
                hacking attempts, or any other unlawful activity that disrupts
                the normal functioning of the website.
              </Typography>

              <Typography variant="h6" gutterBottom>
                5. Intellectual Property
              </Typography>
              <Typography variant="body1" paragraph>
                All content on this website, including text, graphics, logos,
                images, and software, is the property of the Department of CSE
                at City University, unless otherwise noted. You may not
                reproduce, distribute, or modify any content from the website
                without explicit permission. Unauthorized use of the content may
                result in legal action.
              </Typography>

              <Typography variant="h6" gutterBottom>
                6. Limitation of Liability
              </Typography>
              <Typography variant="body1" paragraph>
                The Department of CSE is not responsible for any damages or
                losses resulting from the use or inability to use the website.
                This includes direct, indirect, incidental, special, or
                consequential damages, even if we have been advised of the
                possibility of such damages. We do not guarantee the website
                will be error-free or uninterrupted, and you use the site at
                your own risk.
              </Typography>

              <Typography variant="h6" gutterBottom>
                7. Modifications to Terms
              </Typography>
              <Typography variant="body1" paragraph>
                The Department of CSE reserves the right to modify these Terms
                and Conditions at any time, without prior notice. Changes to the
                terms will be effective immediately upon posting on the website.
                We recommend that you review these terms periodically to stay
                informed of any updates. Continued use of the website after any
                modifications signifies your acceptance of those changes.
              </Typography>

              <Typography variant="h6" gutterBottom>
                8. Contact Us
              </Typography>
              <Typography variant="body1" paragraph>
                If you have any questions or concerns about these Terms and
                Conditions, feel free to contact us. You can reach us via email
                or visit the "Contact Us" page for further information. Our team
                is happy to assist you and provide clarification on any matter
                related to the terms.
              </Typography>

              <Link to="/about-us">
                Click here for more information about our department.
              </Link>

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
    </Box>
  );
};

export default TermsAndCondition;
