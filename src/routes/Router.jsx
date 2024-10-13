import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AdmissionPage, ErrorPage, LandingPage, NotFoundPage } from "../Pages";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/application",
        element: <AdmissionPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
