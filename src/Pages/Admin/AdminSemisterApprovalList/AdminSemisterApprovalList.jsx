import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";

const AdminSemisterApprovalList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data for semester approvals
  const semesterApprovalList = [
    { name: "John Doe", semester: "Spring 2024", batch: "Batch A", status: "Pending" },
    { name: "Jane Smith", semester: "Fall 2023", batch: "Batch B", status: "Approved" },
    { name: "Sam Wilson", semester: "Spring 2024", batch: "Batch A", status: "Pending" },
    { name: "Emily Brown", semester: "Fall 2023", batch: "Batch C", status: "Approved" },
    { name: "David Lee", semester: "Spring 2024", batch: "Batch D", status: "Pending" },
  ];

  const columns = [
    { title: "Name", accessor: "name" },
    { title: "Semester", accessor: "semester" },
    { title: "Batch", accessor: "batch" },
    { title: "Status", accessor: "status" },
  ];

  return (
    <div>
      <ListTable
        columns={columns}
        rows={semesterApprovalList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        edit_url={"edit-semester-approval"}
        view_url={"view-semester-approval"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminSemisterApprovalList;
