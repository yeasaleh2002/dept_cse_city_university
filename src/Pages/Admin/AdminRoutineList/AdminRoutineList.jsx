import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";

const AdminRoutineList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Sample data for routine
  const routineList = [
    { subject: "Mathematics", batch: "Batch A", teacher: "Mr. Smith", time: "10:00 AM - 12:00 PM" },
    { subject: "Physics", batch: "Batch B", teacher: "Dr. Johnson", time: "1:00 PM - 3:00 PM" },
    { subject: "Chemistry", batch: "Batch C", teacher: "Ms. Davis", time: "9:00 AM - 11:00 AM" },
    { subject: "Biology", batch: "Batch D", teacher: "Mr. White", time: "2:00 PM - 4:00 PM" },
    { subject: "Computer Science", batch: "Batch E", teacher: "Dr. Harris", time: "11:00 AM - 1:00 PM" },
  ];

  const columns = [
    { title: "Subject", accessor: "subject" },
    { title: "Batch", accessor: "batch" },
    { title: "Teacher", accessor: "teacher" },
    { title: "Time", accessor: "time" },
  ];

  return (
    <div>
      <ListTable
        columns={columns}
        rows={routineList}
        rowsPerPage={rowsPerPage}
        page={page}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
        enableEdit={true}
        enableDelete={true}
        enableView={true}
        edit_url={"edit-routine"}
        view_url={"view-routine"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminRoutineList;
