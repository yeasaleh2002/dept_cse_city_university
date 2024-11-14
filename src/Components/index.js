
import { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

export const Header = withSuspense(lazy(() => import("./Header")));
export const Footer = withSuspense(lazy(() => import("./Footer")));
export const HeroSection = withSuspense(lazy(() => import("./LandingPage/HeroSection")));
export const Slider = withSuspense(lazy(() => import("./Slider")));

