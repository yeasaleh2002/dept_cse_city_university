import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ListTable({
  columns,
  rows,
  setPage,
  page,
  setRowsPerPage,
  rowsPerPage,
  enableEdit,
  enableDelete,
  enableView,
  view_url,
  edit_url,
  deleteItem,
}) {
  const navigate = useNavigate();

  const handleDelete = (row) => {
    deleteItem(row);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const formatArray = (array, accessor) => {
    return array
      .map((item) =>
        accessor
          .map((acc) => item[acc])
          .filter((val) => val)
          .join(", ")
      )
      .join(" | ");
  };

  const formatValue = (value, isDate) => {
    return isDate ? new Date(value).toLocaleDateString() : value;
  };


  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="dynamic table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.accessor}
                  align={column.align || "left"}
                  style={{ minWidth: column.minWidth || 100 }}
                >
                  {column.title}
                </TableCell>
              ))}
              {(enableEdit || enableDelete || enableView) && (
                <TableCell align="center">Actions</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                  {columns.map((column) => {
                    const value = row[column.accessor];
                    return (
                      <TableCell key={column.accessor} align={column.align || "left"}>
                        {Array.isArray(value)
                          ? formatArray(value, column.subAccessors)
                          : column.format
                          ? column.format(value)
                          : formatValue(value, column.isDate)}
                      </TableCell>
                    );
                  })}
                  {(enableEdit || enableDelete || enableView) && (
                    <TableCell align="center" style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                      {enableView && (
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => navigate(`${view_url}/${row.id}`)}
                        >
                          View
                        </Button>
                      )}
                      {enableEdit && (
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => navigate(`${edit_url}/${row.id}`)}
                        >
                          Edit
                        </Button>
                      )}
                      {enableDelete && (
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(row)}
                        >
                          Delete
                        </Button>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
