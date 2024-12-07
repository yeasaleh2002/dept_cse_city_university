import React from "react";
import { BreadcrumbsComponent } from "../../../Components";

const ContactUs = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Contact Us", link: "/contact-us" },
  ];

  return (
    <div>
      <BreadcrumbsComponent title="Contact Us" breadcrumbs={breadcrumbs} />
    </div>
  );
};

export default ContactUs;
