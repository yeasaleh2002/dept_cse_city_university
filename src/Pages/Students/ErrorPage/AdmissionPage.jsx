import React from "react";
import { BreadcrumbsComponent } from "../../../Components";

const AdmissionPage = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Application Form", link: "/application" },
  ];

  return (
    <div>
      <BreadcrumbsComponent title="Admission Form" breadcrumbs={breadcrumbs} />
      <div className="p-6 bg-[#FFFFFF] h-screen"></div>
    </div>
  );
};

export default AdmissionPage;
