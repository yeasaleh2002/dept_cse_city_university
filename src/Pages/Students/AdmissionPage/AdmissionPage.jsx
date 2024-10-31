import React from "react";
import { BreadcrumbsComponent } from "../../../Components";
import { Container } from "@mui/material";

const AdmissionPage = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "Application Form", link: "/application" },
  ];

  return (
    <div>
      <BreadcrumbsComponent title="Admission Form" breadcrumbs={breadcrumbs} />
      <Container maxWidth="lg">
        <div style={{ padding: "" }} className="bg-[var(--bg-color)]">grsd</div>
      </Container>
    </div>
  );
};

export default AdmissionPage;
