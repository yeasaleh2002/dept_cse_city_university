import React from "react";
import { BreadcrumbsComponent } from "../../../Components";

const FAQ = () => {
  const breadcrumbs = [
    { title: "Home", link: "/" },
    { title: "FAQ", link: "/faq" },
  ];

  return (
    <div>
      <BreadcrumbsComponent title="FAQ" breadcrumbs={breadcrumbs} />
    </div>
  );
};
