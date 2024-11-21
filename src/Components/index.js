import { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

export const Header = withSuspense(lazy(() => import("./Header")));
export const Footer = withSuspense(lazy(() => import("./Footer")));
export const ListTable = withSuspense(lazy(() => import("./ListTable")));
export const BreadcrumbsComponent = withSuspense(
  lazy(() => import("./BreadcrumbsComponent"))
);
export const LoginForm = withSuspense(lazy(() => import("./LoginForm")));
export const HeroSection = withSuspense(lazy(() => import("./LandingPage/HeroSection")));
export const Slider = withSuspense(lazy(() => import("./Slider")));
export const ResponsiveDrawer = withSuspense(lazy(() => import("./ResponsiveDrawer")));
export const AdminDashboardContent = withSuspense(lazy(() => import("./AdminDashboardContent")));
export const ViewModal = withSuspense(lazy(() => import("./ViewModal")));
export const Activites = withSuspense(lazy(() => import("./Activities")));
export const AboutSection = withSuspense(lazy(() => import("./LandingPage/AboutSection")));
export const AboutUs = withSuspense(lazy(() => import("./AboutUs")));
export const AboutInfos = withSuspense(lazy(() => import("./AboutInfos")));
export const CheckCoursesSection = withSuspense(lazy(() => import("./LandingPage/CheckCoursesSection")));
export const CourseCard = withSuspense(lazy(() => import("./CourseCard")));
export const LatestVideoSection = withSuspense(lazy(() => import("./LandingPage/LatestVideoSection")));
export const MeetTeacherSection = withSuspense(lazy(() => import("./LandingPage/MeetTeacherSection")));
export const TeacherCard = withSuspense(lazy(() => import("./TeacherCard")));
export const OurGoalSection = withSuspense(lazy(() => import("./LandingPage/OurGoalSection")));
export const PhotoGallerySection = withSuspense(lazy(() => import("./LandingPage/PhotoGallerySection")));
export const OfferSection = withSuspense(lazy(() => import("./LandingPage/OfferSection")));
export const EventsSection = withSuspense(lazy(() => import("./LandingPage/EventsSection")));
export const EventCard = withSuspense(lazy(() => import("./EventCard")));
export const ReviewSection = withSuspense(lazy(() => import("./LandingPage/ReviewSection")));
export const ReviewCard = withSuspense(lazy(() => import("./ReviewCard")));
export const NewsSection = withSuspense(lazy(() => import("./LandingPage/NewsSection")));
export const NewsCard = withSuspense(lazy(() => import("./NewsCard")));








