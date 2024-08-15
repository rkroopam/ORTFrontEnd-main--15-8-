import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/authSlice";
import { UserType } from "../../../constants";

const TopStats = () => {
  const navigate = useNavigate()
  const user = useSelector(selectUser);
  const userRole = user ? user.userType : UserType.student;
  return (
    <Box>
      <Grid container spacing={3}>
        {userRole === UserType.superAdmin && (
          <Grid item xs={12} sm={6} md={3}>
            <Paper onClick={() => navigate(`/${userRole}/admin`)} elevation={3} sx={{ p: 2, minHeight: 100, cursor: "pointer" }}>
              <Typography variant="h6" >
                Admins
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                5
              </Typography>
            </Paper>
          </Grid>
        )}
        {userRole !== UserType.teacher && (
          <Grid item xs={12} sm={6} md={3}>
            <Paper onClick={() => navigate(`/${userRole}/teachers`)} elevation={3} sx={{ p: 2, minHeight: 100, cursor: "pointer" }}>
              <Typography variant="h6" >
                Teachers
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                5
              </Typography>
            </Paper>
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={3}>
          <Paper onClick={() => navigate(`/${userRole}/students`)} elevation={3} sx={{ p: 2, minHeight: 100, cursor: "pointer" }}>
            <Typography variant="h6">
              Students
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              5
            </Typography>
          </Paper>
        </Grid>
        {userRole === UserType.superAdmin && (
          <Grid item xs={12} sm={6} md={3}>
            <Paper onClick={() => navigate(`/${userRole}/payments-management`)} elevation={3} sx={{ p: 2, minHeight: 100, cursor: "pointer" }}>
              <Typography variant="h6" >
                Payment Models
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                5
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default TopStats;
