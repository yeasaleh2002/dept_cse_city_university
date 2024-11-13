import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";

const AdminSubjectList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data for subjects
  const subjectList = [
    { subjectName: "Mathematics", courseCode: "MTH101" },
    { subjectName: "Physics", courseCode: "PHY101" },
    { subjectName: "Chemistry", courseCode: "CHM101" },
    { subjectName: "Biology", courseCode: "BIO101" },
    { subjectName: "Computer Science", courseCode: "CSE101" },
  ];

  const columns = [
    { title: "Subject Name", accessor: "subjectName" },
    { title: "Course Code", accessor: "courseCode" },
  ];

  return (
    <div>
      <ListTable
        columns={columns}
        rows={subjectList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        edit_url={"edit-subject"}
        view_url={"view-subject"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminSubjectList;
