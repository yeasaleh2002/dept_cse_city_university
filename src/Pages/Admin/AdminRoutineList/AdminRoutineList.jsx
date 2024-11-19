import React, { useState } from "react";
import ListTable from "../../../Components/ListTable";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminRoutineList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  // Sample data for routine
  const routineList = [
    { id: 1, subject: "Mathematics", batch: "Batch A", teacher: "Mr. Smith", time: "10:00 AM - 12:00 PM" },
    { id: 2, subject: "Physics", batch: "Batch B", teacher: "Dr. Johnson", time: "1:00 PM - 3:00 PM" },
    { id: 3, subject: "Chemistry", batch: "Batch C", teacher: "Ms. Davis", time: "9:00 AM - 11:00 AM" },
    { id: 4, subject: "Biology", batch: "Batch D", teacher: "Mr. White", time: "2:00 PM - 4:00 PM" },
    { id: 5, subject: "Computer Science", batch: "Batch E", teacher: "Dr. Harris", time: "11:00 AM - 1:00 PM" },
  ];

  const columns = [
    { title: "Subject", accessor: "subject" },
    { title: "Batch", accessor: "batch" },
    { title: "Teacher", accessor: "teacher" },
    { title: "Time", accessor: "time" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Routine List</h1>
        <Button
          onClick={() => navigate("/admin/add-routine")}
          sx={{ backgroundColor: "#116E63", color: "white" }}
        >
          Add Routine
        </Button>
      </div>
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
        edit_url={"/admin/edit-routine"}
        deleteItem={() => {}}
      />
    </div>
  );
};

export default AdminRoutineList;
