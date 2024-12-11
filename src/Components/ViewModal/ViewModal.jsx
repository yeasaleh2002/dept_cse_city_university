import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh", // Set maximum height for the modal
  overflowY: "auto", // Enable scrolling if content exceeds 90vh
};

export default function ViewModal({
  open,
  handleClose,
  title,
  data,
  columns,
}) {
  // Helper function to format array values
  const formatArrayValue = (array, subAccessors) => {
    return array.map((item, index) => (
      <Box key={index} sx={{ mb: 1 }}>
        {subAccessors.map((subAcc) => (
          <Typography variant="body2" key={subAcc}>
            <strong>{subAcc.replace(/_/g, " ")}:</strong> {item[subAcc] ?? "N/A"}
          </Typography>
        ))}
      </Box>
    ));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h5" component="h2" mb={2}>
            {title}
          </Typography>
          <Table>
            <TableBody>
              {columns
                .filter((col) => !col.exclude)
                .map((col) => (
                  <TableRow key={col.accessor}>
                    <TableCell>
                      <Typography variant="body1" fontWeight="bold">
                        {col.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {col.isArray && Array.isArray(data[col.accessor]) ? (
                        formatArrayValue(data[col.accessor], col.subAccessors)
                      ) : (
                        <Typography variant="body1">
                          {data[col.accessor] ?? "N/A"}
                        </Typography>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </Fade>
    </Modal>
  );
}
