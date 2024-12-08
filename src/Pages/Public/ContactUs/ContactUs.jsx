import React from "react";
import { BreadcrumbsComponent } from "../../../Components";
import { Box } from "@mui/material";

 const ContactUs = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  return (
   <div>
     <Box maxWidth='lg' marginX='auto'>
      <BreadcrumbsComponent title="Contact Us" breadcrumbs={breadcrumbs} />
    </Box>
   </div>
  );
};
export default ContactUs;
