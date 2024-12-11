import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminSubjectList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  // Sample data for subjects
  const subjectList = [
    { id: 1, subjectName: "Mathematics", courseCode: "MTH101" },
    { id: 2, subjectName: "Physics", courseCode: "PHY101" },
    { id: 3, subjectName: "Chemistry", courseCode: "CHM101" },
    { id: 4, subjectName: "Biology", courseCode: "BIO101" },
    { id: 5, subjectName: "Computer Science", courseCode: "CSE101" },
  ];

  const columns = [
    { title: "Subject Name", accessor: "subjectName" },
    { title: "Course Code", accessor: "courseCode" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Subject List</h1>
        <Button
          sx={{ backgroundColor: "#116E63", color: "white" }}
          onClick={() => navigate("/admin/add-subject")}
        >
          Add Subject
        </Button>
      </div>
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
        edit_url={"/admin/edit-subject"}
        view_url={"view-subject"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminSubjectList;
