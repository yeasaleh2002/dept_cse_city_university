import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";
import { teacherList } from "../../../Shared";

const AdminTeacherList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
        edit_url="/admin/teachers/edit"
        deleteItem={handleDelete}
      />
    </div>
  );
};

export default AdminTeacherList;
