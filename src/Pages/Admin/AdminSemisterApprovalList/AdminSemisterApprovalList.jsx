import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";

const AdminSemisterApprovalList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data for semester approvals
  const semesterApprovalList = [
    { id: 1, name: "John Doe", semester: "Spring 2024", batch: "Batch A", status: "Pending" },
    { id: 2, name: "Jane Smith", semester: "Fall 2023", batch: "Batch B", status: "Approved" },
    { id: 3, name: "Sam Wilson", semester: "Spring 2024", batch: "Batch A", status: "Pending" },
    { id: 4, name: "Emily Brown", semester: "Fall 2023", batch: "Batch C", status: "Approved" },
    { id: 5, name: "David Lee", semester: "Spring 2024", batch: "Batch D", status: "Pending" },
  ];

  const columns = [
    { title: "Name", accessor: "name" },
    { title: "Semester", accessor: "semester" },
    { title: "Batch", accessor: "batch" },
    { title: "Status", accessor: "status" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Semester Approval List</h1>
       
      </div>
      <ListTable
        columns={columns}
        rows={semesterApprovalList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={false}
        enableDelete={false}
        enableView={true}
        edit_url={"/admin/edit-semester-approval"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminSemisterApprovalList;
