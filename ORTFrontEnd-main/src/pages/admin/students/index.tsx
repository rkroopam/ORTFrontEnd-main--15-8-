import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { get_AllStudent } from "../../../api/services/user";
import { CustomLoader } from "../../../common";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers";
import { selectUser } from "../../../store/reducers/authSlice";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CustomDialog from "../../../common/CustomDialog";

const Students = () => {
  const [openAddStudent, setOpenAddStudent] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<any>(null); // Changed to null instead of empty string
  const handleOpen = () => setOpenAddStudent(true);
  const [viewStudentData, setViewStudentData] = useState(false);
  const handleClose = () => {
    setIsEditing(false);
    setOpenAddStudent(false);
    setSelectedStudent(null); // Reset to null
  };

  const token: any = useSelector((state: any) => state.auth.token);
  const user: any = useSelector((state: RootState) => selectUser(state));

  const { isPending, data, refetch } = useQuery({
    queryKey: ["student"],
    queryFn: () => get_AllStudent(user, token),
  });
  const handleDialogClose = () => {
    setViewStudentData(false);
  };

  // const handleDelete = async (id: string) => {
  //   try {
  //     await delete_user(id);
  //     refetch();
  //     console.log("Item Deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting student:", error);
  //   }
  // };

  // const handleEdit = (item: any) => {
  //   setOpenAddStudent(true);
  //   setIsEditing(true);
  //   setSelectedStudent(item);
  // };

  if (isPending) return <CustomLoader />;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Students
        </Typography>
        {/* <Button variant="contained" onClick={handleOpen}>
          Add new
        </Button> */}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sr. No</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.items?.map((item: any, index: number) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell component="th" scope="row">
                  {item.fName} {item.lName} {/* Concatenate properly */}
                </TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phoneNumber}</TableCell>
                <TableCell>
                  <Tooltip title="View Student Info">
                    <IconButton onClick={() => setViewStudentData(true)}>
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>

                {/* <TableCell>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(item)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(item._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <StudentForm
        refetch={refetch}
        open={openAddStudent}
        handleClose={handleClose}
        isEditing={isEditing}
        student={selectedStudent}
      /> */}
      <CustomDialog
        open={viewStudentData}
        onClose={handleDialogClose}
        content={
          <Box>
            <Typography>Hello Student Data</Typography>
          </Box>
        }
      />
    </Box>
  );
};

export default Students;
