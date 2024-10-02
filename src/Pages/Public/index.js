import React, { lazy } from "react";
import { withSuspense } from "../../Utils/withSuspense";

export const LandingPage = withSuspense(lazy(()=> import("./LandingPage/LandingPage")));