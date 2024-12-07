import React from "react";
import { BreadcrumbsComponent } from "../../../Components";

const PrivacyPolicy = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Privacy Policy", link: "/privacy-policy" },
  ];

  return (
    <div>
      <BreadcrumbsComponent title="Privacy Policy" breadcrumbs={breadcrumbs} />
    </div>
  );
};

export default PrivacyPolicy;
