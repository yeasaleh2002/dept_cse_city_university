import React from "react";
import { BreadcrumbsComponent } from "../../../Components";

const TermsAndCondition = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Terms and Conditions", link: "/terms-and-conditions" },
  ];

  return (
    <div>
      <BreadcrumbsComponent
        title="Terms and Conditions"
        breadcrumbs={breadcrumbs}
      />
    </div>
  );
};

export default TermsAndCondition;
