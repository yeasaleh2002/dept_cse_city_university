import { lazy } from "react";
import { withSuspense } from "../../Utils/withSuspense";

export const breadcrumbsBg = withSuspense(
  lazy(() => import("./breadcrumbs.jpg"))
);

export const Slide_1 = withSuspense(lazy(() => import("./edu_slide_img_1.jpeg")));
export const Slide_2 = withSuspense(lazy(() => import("./edu_slide_img_2.jpeg")));
export const Slide_3 = withSuspense(lazy(() => import("./edu_slide_img_3.webp")));
