import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  AdminDashboard,
  AdminLogin,
  AdminAddBatch,
  AdminAddRoutine,
  AdminAddStudent,
  AdminAddTeacher,
  AdminBatchList,
  AdminClass_test_Lab_List,
  AdminEditBatch,
  AdminEditRoutine,
  AdminEditStudent,
  AdminEditSubject,
  AdminEditTeacher,
  AdminResultList,
  AdminRoutineList,
  AdminSemisterApprovalList,
  AdminStudentList,
  AdminSubjectList,
  AdmissionApprovalList,
  AdmissionPage,
  ApplyForASemister,
  ErrorPage,
  LandingPage,
  NotFoundPage,
  TeacherLogin,
  ClassRoutine,
  EditTeacherProfile,
  PostClassTest,
  PublishResult,
  TeacherDashboard,
  TeacherNotification,
  AddStudentClassTest_Lab,
  EditStudentClassTest_Lab,
  StudentClassTest_Lab_List,
  StudentDashboard,
  StudentEditProfile,
  StudentNotification,
  ViewClassRoutine,
  ViewStudentResult,
  PostStudentResult,
  EditStudentResult,
  AdminAddSubject,
} from "../Pages";
import App from "../App";
import LoginPage from "../Pages/Students/Login";
import AdminTeacherList from "../Pages/Admin/AdminTeacherList/AdminTeacherList";

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
      // students routes
      {
        path: "/application",
        element: <AdmissionPage />,
      },
      {
        path: "/student/login",
        element: <LoginPage />,
      },
      {
        path: "/student/apply-semester",
        element: <ApplyForASemister />,
      },
      {
        path: "/student/add-class-test-lab",
        element: <AddStudentClassTest_Lab />,
      },
      {
        path: "/student/edit-class-test-lab",
        element: <EditStudentClassTest_Lab />,
      },
      {
        path: "/student/class-test-lab-list",
        element: <StudentClassTest_Lab_List />,
      },
      {
        path: "/student/dashboard",
        element: <StudentDashboard />,
      },
      {
        path: "/student/edit-profile",
        element: <StudentEditProfile />,
      },
      {
        path: "/student/notifications",
        element: <StudentNotification />,
      },
      {
        path: "/student/class-routine",
        element: <ViewClassRoutine />,
      },
      {
        path: "/student/view-results",
        element: <ViewStudentResult />,
      },

      // teachers routes
      {
        path: "/teacher/login",
        element: <TeacherLogin />,
      },
      {
        path: "/teacher/class-routine",
        element: <ClassRoutine />,
      },
      {
        path: "/teacher/edit-profile",
        element: <EditTeacherProfile />,
      },
      {
        path: "/teacher/post-class-test",
        element: <PostClassTest />,
      },
      {
        path: "/teacher/publish-result",
        element: <PublishResult />,
      },
      {
        path: "/teacher/dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "/teacher/notifications",
        element: <TeacherNotification />,
      },

      // admin routes
      {
        path: "/admin/login",
        element: <AdminLogin />,
      },
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/add-batch",
        element: <AdminAddBatch />,
      },
      {
        path: "/admin/add-routine",
        element: <AdminAddRoutine />,
      },
      {
        path: "/admin/add-student",
        element: <AdminAddStudent />,
      },
      {
        path: "/admin/add-teacher",
        element: <AdminAddTeacher />,
      },
      {
        path: "/admin/add-subject",
        element: <AdminAddSubject />,
      },
      {
        path: "/admin/batch-list",
        element: <AdminBatchList />,
      },
      {
        path: "/admin/class-test-lab-list",
        element: <AdminClass_test_Lab_List />,
      },
      {
        path: "/admin/edit-batch/:id",
        element: <AdminEditBatch />,
      },
      {
        path: "/admin/edit-routine/:id",
        element: <AdminEditRoutine />,
      },
      {
        path: "/admin/edit-student/:id",
        element: <AdminEditStudent />,
      },
      {
        path: "/admin/edit-subject/:id",
        element: <AdminEditSubject />,
      },
      {
        path: "/admin/edit-teacher/:id",
        element: <AdminEditTeacher />,
      },
      {
        path: "/admin/result-list",
        element: <AdminResultList />,
      },
      {
        path: "/admin/routine-list",
        element: <AdminRoutineList />,
      },
      {
        path: "/admin/semester-approval-list",
        element: <AdminSemisterApprovalList />,
      },
      {
        path: "/admin/student-list",
        element: <AdminStudentList />,
      },
      {
        path: "/admin/subject-list",
        element: <AdminSubjectList />,
      },
      {
        path: "/admin/teacher-list",
        element: <AdminTeacherList />,
      },
      {
        path: "/admin/admission-approval-list",
        element: <AdmissionApprovalList />,
      },
      {
        path: "/admin/edit-student-result",
        element: <EditStudentResult />,
      },
      {
        path: "/admin/post-student-result",
        element: <PostStudentResult />,
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
