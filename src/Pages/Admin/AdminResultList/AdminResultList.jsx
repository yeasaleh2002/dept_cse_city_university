import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminResultList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  // Sample data for results
  const resultList = [
    { id: 1, subject: "Mathematics", studentName: "John Doe", batch: "Batch A", marks: 85, semester: "Fall 2023" },
    { id: 2, subject: "Physics", studentName: "Jane Smith", batch: "Batch B", marks: 78, semester: "Spring 2023" },
    { id: 3, subject: "Chemistry", studentName: "Sam Wilson", batch: "Batch A", marks: 92, semester: "Fall 2023" },
    { id: 4, subject: "Biology", studentName: "Emily Brown", batch: "Batch C", marks: 88, semester: "Spring 2023" },
    { id: 5, subject: "Computer Science", studentName: "David Lee", batch: "Batch D", marks: 90, semester: "Fall 2023" },
  ];

  const columns = [
    { title: "Subject", accessor: "subject" },
    { title: "Student Name", accessor: "studentName" },
    { title: "Batch", accessor: "batch" },
    { title: "Marks", accessor: "marks" },
    { title: "Semester", accessor: "semester" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Result List</h1>
        <Button
          onClick={() => navigate("/admin/post-student-result")}
          sx={{ backgroundColor: "#116E63", color: "white" }}
        >
          Add Result
        </Button>
      </div>
      <ListTable
        columns={columns}
        rows={resultList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        edit_url={"/admin/edit-student-result"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminResultList;
