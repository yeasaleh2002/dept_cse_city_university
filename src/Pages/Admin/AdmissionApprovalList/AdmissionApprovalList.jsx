import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";

const AdmissionApprovalList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data for admission approvals
  const admissionList = [
    { name: "John Doe", email: "john@example.com", batch: "Batch A", status: "Pending" },
    { name: "Jane Smith", email: "jane@example.com", batch: "Batch B", status: "Approved" },
    { name: "Sam Wilson", email: "sam@example.com", batch: "Batch A", status: "Pending" },
    { name: "Emily Brown", email: "emily@example.com", batch: "Batch C", status: "Approved" },
    { name: "David Lee", email: "david@example.com", batch: "Batch D", status: "Pending" },
  ];

  const columns = [
    { title: "Name", accessor: "name" },
    { title: "Email", accessor: "email" },
    { title: "Batch", accessor: "batch" },
    { title: "Status", accessor: "status" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admission Approval List</h1>
      <ListTable
        columns={columns}
        rows={admissionList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={false}
        enableDelete={false}
        enableView={true}
        edit_url={"edit-admission"}
        view_url={"view-admission"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdmissionApprovalList;
