import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { teacherList } from "../../../Shared";
import ListTable from "../../../Components/ListTable";

const AdminTeacherList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const columns = [
    { title: "Name", accessor: "name" },
    { title: "Designation", accessor: "designation" },
    { title: "Email", accessor: "email" },
    { title: "Phone", accessor: "phone" },
    { title: "Gender", accessor: "gender" },
    { title: "Degree", accessor: "degree", isArray: true, subAccessors: ["name", "year", "result", "university"] },
    { title: "Experience", accessor: "experience", isArray: true, subAccessors: ["institution_name", "designation", "start_date", "end_date"] },
    { title: "Research", accessor: "research" },
    { title: "Publication", accessor: "publication" },
  ];

  const handleDelete = (row) => {
    // logic to delete the teacher entry
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Teacher List</h1>
        <Button sx={{ backgroundColor: "#116E63", color: "white" }} onClick={() => navigate("/admin/add-teacher")}>
          Add Teacher
        </Button>
      </div>
      <ListTable
        columns={columns}
        rows={teacherList}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        view_url="/admin/teachers/view"
        deleteItem={handleDelete}
      />
    </div>
  );
};

export default AdminTeacherList;
