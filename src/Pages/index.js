import { lazy } from "react";
import { withSuspense } from "../Utils/withSuspense";

// Public pages
export const LandingPage = withSuspense(
  lazy(() => import("./Public/LandingPage"))
);
export const ErrorPage = withSuspense(lazy(() => import("./Public/ErrorPage")));
export const NotFoundPage = withSuspense(
  lazy(() => import("./Public/NotFoundPage"))
);
export const About = withSuspense(lazy(() => import("./Public/About")));
export const ContactUs = withSuspense(lazy(() => import("./Public/ContactUs")));
export const FAQ = withSuspense(lazy(() => import("./Public/FAQ")));
export const PrivacyPolicy = withSuspense(
  lazy(() => import("./Public/PrivacyPolicy"))
);
export const TermsAndCondition = withSuspense(
  lazy(() => import("./Public/TermsAndCondition"))
);

// Students pages
export const AddStudentClassTest_Lab = withSuspense(
  lazy(() =>
    import("./Students/AddStudentClassTest_Lab/AddStudentClassTest_Lab")
  )
);

export const AdmissionPage = withSuspense(
  lazy(() => import("./Students/AdmissionPage/AdmissionPage"))
);

export const ApplyForASemister = withSuspense(
  lazy(() => import("./Students/ApplyForASemister/ApplyForASemister"))
);

export const EditStudentClassTest_Lab = withSuspense(
  lazy(() =>
    import("./Students/EditStudentClassTest_Lab/EditStudentClassTest_Lab")
  )
);

export const StudentLogin = withSuspense(
  lazy(() => import("./Students/Login/LoginPage"))
);

export const StudentClassTest_Lab_List = withSuspense(
  lazy(() =>
    import("./Students/StudentClassTest_Lab_List/StudentClassTest_Lab_List")
  )
);

export const StudentDashboard = withSuspense(
  lazy(() => import("./Students/StudentDashboard/StudentDashboard"))
);

export const StudentEditProfile = withSuspense(
  lazy(() => import("./Students/StudentEditProfile/StudentEditProfile"))
);

export const StudentNotification = withSuspense(
  lazy(() => import("./Students/StudentNotification/StudentNotification"))
);

export const ViewClassRoutine = withSuspense(
  lazy(() => import("./Students/ViewClassRoutine/ViewClassRoutine"))
);

export const ViewStudentResult = withSuspense(
  lazy(() => import("./Students/ViewStudentResult/ViewStudentResult"))
);

export const StudentProfile = withSuspense(
  lazy(() => import("./Students/StudentProfile"))
);

export const Announcements = withSuspense(
  lazy(() => import("./Students/Announcements"))
);

export const Results = withSuspense(
  lazy(() => import("./Students/Results"))
);


// Teachers pages
export const TeacherLogin = withSuspense(
  lazy(() => import("./Teachers/Login/TeacherLogin"))
);

export const ClassRoutine = withSuspense(
  lazy(() => import("./Teachers/ClassRoutine/ClassRoutine"))
);

export const EditTeacherProfile = withSuspense(
  lazy(() => import("./Teachers/EditTeacherProfile/EditTeacherProfile"))
);

export const PostClassTest = withSuspense(
  lazy(() => import("./Teachers/PostClassTest/PostClassTest"))
);

export const PublishResult = withSuspense(
  lazy(() => import("./Teachers/PublishResult/PublishResult"))
);

export const TeacherDashboard = withSuspense(
  lazy(() => import("./Teachers/TeacherDashboard/TeacherDashboard"))
);

export const TeacherNotification = withSuspense(
  lazy(() => import("./Teachers/TeacherNotification/TeacherNotification"))
);

export const TeacherClassTestList = withSuspense(
  lazy(() => import("./Teachers/TeacherClassTestList/TeacherClassTestList"))
);

export const EditClassTest = withSuspense(
  lazy(() => import("./Teachers/EditClassTest/EditClassTest"))
);

export const TeacherAddExperience = withSuspense(
  lazy(() => import("./Teachers/TeacherAddExperience/TeacherAddExperience"))
);

export const TeacherAddDegree = withSuspense(
  lazy(() => import("./Teachers/TeacherAddDegree/TeacherAddDegree"))
);

export const TeacherPublishResultList = withSuspense(
  lazy(() =>
    import("./Teachers/TeacherPublishResultList/TeacherPublishResultList")
  )
);

// Admin pages
export const AdminAddBatch = withSuspense(
  lazy(() => import("./Admin/AdminAddBatch/AdminAddBatch"))
);

export const AdminAddRoutine = withSuspense(
  lazy(() => import("./Admin/AdminAddRoutine/AdminAddRoutine"))
);

export const AdminAddStudent = withSuspense(
  lazy(() => import("./Admin/AdminAddStudent/AdminAddStudent"))
);

export const AdminAddTeacher = withSuspense(
  lazy(() => import("./Admin/AdminAddTeacher/AdminAddTeacher"))
);

export const AdminBatchList = withSuspense(
  lazy(() => import("./Admin/AdminBatchList/AdminBatchList"))
);

export const AdminTeacherList = withSuspense(
  lazy(() => import("./Admin/AdminTeacherList/AdminTeacherList"))
);

export const AdminClass_test_Lab_List = withSuspense(
  lazy(() =>
    import("./Admin/AdminClass_test_Lab_List/AdminClass_test_Lab_List")
  )
);

export const AdminDashboard = withSuspense(
  lazy(() => import("./Admin/AdminDashboard/AdminDashboard"))
);

export const AdminEditBatch = withSuspense(
  lazy(() => import("./Admin/AdminEditBatch/AdminEditBatch"))
);

export const AdminEditRoutine = withSuspense(
  lazy(() => import("./Admin/AdminEditRoutine/AdminEditRoutine"))
);

export const AdminEditStudent = withSuspense(
  lazy(() => import("./Admin/AdminEditStudent/AdminEditStudent"))
);

export const AdminEditSubject = withSuspense(
  lazy(() => import("./Admin/AdminEditSubject/AdminEditSubject"))
);

export const AdminEditTeacher = withSuspense(
  lazy(() => import("./Admin/AdminEditTeacher/AdminEditTeacher"))
);

export const AdminLogin = withSuspense(
  lazy(() => import("./Admin/AdminLogin/AdminLogin"))
);

export const AdminResultList = withSuspense(
  lazy(() => import("./Admin/AdminResultList/AdminResultList"))
);

export const AdminRoutineList = withSuspense(
  lazy(() => import("./Admin/AdminRoutineList/AdminRoutineList"))
);

export const AdminSemisterApprovalList = withSuspense(
  lazy(() =>
    import("./Admin/AdminSemisterApprovalList/AdminSemisterApprovalList")
  )
);

export const AdminStudentList = withSuspense(
  lazy(() => import("./Admin/AdminStudentList/AdminStudentList"))
);

export const AdminSubjectList = withSuspense(
  lazy(() => import("./Admin/AdminSubjectList/AdminSubjectList"))
);

export const AdmissionApprovalList = withSuspense(
  lazy(() => import("./Admin/AdmissionApprovalList/AdmissionApprovalList"))
);

export const EditStudentResult = withSuspense(
  lazy(() => import("./Admin/EditStudentResult/EditStudentResult"))
);

export const PostStudentResult = withSuspense(
  lazy(() => import("./Admin/PostStudentResult/PostStudentResult"))
);

export const AdminAddSubject = withSuspense(
  lazy(() => import("./Admin/AdminAddSubject/AdminAddSubject"))
);
