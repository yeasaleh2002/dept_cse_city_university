import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";
import { studentList } from "../../../Shared";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminStudentList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  // Define the columns with titles and accessors for each field
  const columns = [
    { title: "Name", accessor: "name" },
    { title: "Email", accessor: "email" },
    { title: "Phone", accessor: "phone" },
    { title: "Date of Birth", accessor: "dob", isDate: true },
    { title: "Address", accessor: "address" },
    { title: "Batch", accessor: "batch" },
    { title: "Father & Mother Name", accessor: "fatherMotherName" },
    { title: "Gender", accessor: "gender" },
    { title: "SSC Roll", accessor: "sscRoll" },
    { title: "SSC Reg", accessor: "sscReg" },
    { title: "SSC Passing Year", accessor: "sscPassingYear" },
    { title: "SSC Result", accessor: "sscResult" },
    { title: "SSC School", accessor: "sscSchool" },
    { title: "SSC Board", accessor: "sscBoard" },
    { title: "HSC Roll", accessor: "hscRoll" },
    { title: "HSC Reg", accessor: "hscReg" },
    { title: "HSC Passing Year", accessor: "hscPassingYear" },
    { title: "HSC Result", accessor: "hscResult" },
    { title: "HSC College", accessor: "hscCollege" },
    { title: "HSC Board", accessor: "hscBoard" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Student List</h1>
        <Button
          onClick={() => navigate("/admin/add-student")}
          sx={{ backgroundColor: "#116E63", color: "white" }}
        >
          Add Student
        </Button>
      </div>
      <ListTable
        columns={columns}
        rows={studentList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        edit_url={"/admin/edit-student"}
        view_url={"view-student"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminStudentList;
