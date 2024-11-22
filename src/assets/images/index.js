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

export { default as gallery1 } from "./gallery01.jpg";
export { default as gallery2 } from "./gallery02.jpg";
export { default as gallery3 } from "./gallery03.jpg";
export { default as gallery4 } from "./gallery04.jpg";
export { default as gallery5 } from "./gallery05.jpg";
export { default as gallery6 } from "./gallery06.jpg";

export { default as offer_bg } from "./offer_bg.jpg";

export { default as event1 } from "./event01.jpg";
export { default as event2 } from "./event02.jpg";
export { default as event3 } from "./event03.jpg"; 

export { default as reviewBg } from "./review_bg.jpg";
export { default as review1 } from "./review01.jpg";
export { default as review2 } from "./review02.jpg";
export { default as review3 } from "./review03.jpg";
export { default as review4 } from "./review04.jpg";
export { default as review5 } from "./review05.jpg";

export { default as news1 } from "./news01.jpg";
export { default as news2 } from "./news02.jpg";
export { default as news3 } from "./news03.jpg";

export { default as badge1 } from "./badge01.png";
export { default as badge2 } from "./badge02.png";
export { default as badge3 } from "./badge03.png";
export { default as badge4 } from "./badge04.png";

