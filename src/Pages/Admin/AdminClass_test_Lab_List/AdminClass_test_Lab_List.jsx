import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";

const AdminClassTestLabList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data for class tests and labs
  const classTestLabList = [
    { teacherId: "T001", teacherName: "Mr. Smith", subject: "Mathematics", code: "MTH101", testNumber: 1, batch: "Batch A", document: "file1.pdf" },
    { teacherId: "T002", teacherName: "Dr. Johnson", subject: "Physics", code: "PHY101", testNumber: 2, batch: "Batch B", document: "file2.pdf" },
    { teacherId: "T003", teacherName: "Ms. Davis", subject: "Chemistry", code: "CHM101", testNumber: 3, batch: "Batch C", document: "file3.pdf" },
    { teacherId: "T004", teacherName: "Mr. White", subject: "Biology", code: "BIO101", testNumber: 4, batch: "Batch D", document: "file4.pdf" },
    { teacherId: "T005", teacherName: "Dr. Harris", subject: "Computer Science", code: "CSE101", testNumber: 5, batch: "Batch E", document: "file5.pdf" },
  ];

  const columns = [
    { title: "Teacher ID", accessor: "teacherId" },
    { title: "Teacher Name", accessor: "teacherName" },
    { title: "Subject", accessor: "subject" },
    { title: "Code", accessor: "code" },
    { title: "Class Test Number", accessor: "testNumber" },
    { title: "Batch", accessor: "batch" },
    { title: "Document", accessor: "document" },
  ];

  return (
    <div>
      <ListTable
        columns={columns}
        rows={classTestLabList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        edit_url={"edit-class-test-lab"}
        view_url={"view-class-test-lab"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminClassTestLabList;
