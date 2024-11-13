import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";

const AdminResultList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data for results
  const resultList = [
    { subject: "Mathematics", studentName: "John Doe", batch: "Batch A", marks: 85, semester: "Fall 2023" },
    { subject: "Physics", studentName: "Jane Smith", batch: "Batch B", marks: 78, semester: "Spring 2023" },
    { subject: "Chemistry", studentName: "Sam Wilson", batch: "Batch A", marks: 92, semester: "Fall 2023" },
    { subject: "Biology", studentName: "Emily Brown", batch: "Batch C", marks: 88, semester: "Spring 2023" },
    { subject: "Computer Science", studentName: "David Lee", batch: "Batch D", marks: 90, semester: "Fall 2023" },
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
        edit_url={"edit-result"}
        view_url={"view-result"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminResultList;
