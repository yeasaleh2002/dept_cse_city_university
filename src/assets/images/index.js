import { lazy } from "react";
import { withSuspense } from "../../Utils/withSuspense";

export const breadcrumbsBg = withSuspense(
  lazy(() => import("./breadcrumbs.jpg"))
);

export const student_login = withSuspense(
  lazy(() => import("./student_login.jpg"))
);
export const teachers = withSuspense(lazy(() => import("./teachers.jpg")));
export const edu_slide_img_1 = withSuspense(
  lazy(() => import("./edu_slide_img_1.jpeg"))
);
export const edu_slide_img_2 = withSuspense(
  lazy(() => import("./edu_slide_img_2.jpeg"))
);
export const edu_slide_img_3 = withSuspense(
  lazy(() => import("./edu_slide_img_3.webp"))
);

export { default as bg_slide_1 } from "./edu_slide_img_1.jpeg";
export { default as bg_slide_2 } from "./edu_slide_img_2.jpeg";
export { default as bg_slide_3 } from "./edu_slide_img_3.webp";

export { default as about01 } from "./about01.jpg";
export { default as about02 } from "./about02.jpg";
export { default as about03 } from "./about03.jpg";
export { default as about_bg } from "./about_bg.jpg";

export { default as course01 } from "./course01.jpg";
export { default as course02 } from "./course02.jpg";
export { default as course03 } from "./course03.jpg";
export { default as course04 } from "./course04.jpg";
export { default as course05 } from "./course05.jpg";
export { default as course06 } from "./course06.jpg";

export { default as teacher1 } from "./teacher01.jpg";
export { default as teacher2 } from "./teacher02.jpg";
export { default as teacher3 } from "./teacher03.jpg";
export { default as teacher4 } from "./teacher04.jpg";

export { default as goal_img } from "./goal01.jpg";
export { default as goal_bg } from "./goal_bg-shape01.png";

