import React, { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

export const LandingPage = withSuspense(lazy(() => import("./Public/LandingPage")));
export const ErrorPage = withSuspense(lazy(()=> import("./Public/ErrorPage")));
export const NotFoundPage = withSuspense(lazy(()=> import("./Public/NotFoundPage")));
