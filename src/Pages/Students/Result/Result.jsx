import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const Result = () => {

  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://city-uni-dpt-api.onrender.com/student/results/")
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.error("Error fetching results:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography sx={{textAlign: "center"}} variant="h4" component="h1" gutterBottom>
        Results
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          {/* Table Header */}
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>Subject</strong></TableCell>
              <TableCell align="center"><strong>Marks</strong></TableCell>
              <TableCell align="center"><strong>Exam Type</strong></TableCell>
              <TableCell align="center"><strong>Student</strong></TableCell>
              <TableCell align="center"><strong>Batch</strong></TableCell>
              <TableCell align="center"><strong>Semester</strong></TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody>
            {results.length > 0 ? (
              results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell align="center">{result.subject_name}</TableCell>
                  <TableCell align="center">{result.marks}</TableCell>
                  <TableCell align="center">{result.exam_type}</TableCell>
                  <TableCell align="center">{result.student_name}</TableCell>
                  <TableCell align="center">{result.batch_name}</TableCell>
                  <TableCell align="center">{result.semester_name}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No results available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Result;