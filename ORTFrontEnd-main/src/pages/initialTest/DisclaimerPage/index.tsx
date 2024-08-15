import { Box, Button, Container, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "../../../components/BackgroundContainer";


const DisclaimerPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleNextClick = () => {
    navigate("/disclaimer-page2");
  };

  const iconStyle = {
    color: theme.palette.primary.contrastText, // Green color for the icon
    backgroundColor: theme.palette.primary.light, // Light green background
    borderRadius: "50%", // Circular container
    padding: "8px", // Padding to adjust the size of the circle
    display: "inline-flex", // Align with text
    alignItems: "center", // Center the icon vertically
    justifyContent: "center",
    marginRight: "10px",
  };
  return (
    <BackgroundContainer>
      <Container component="main" maxWidth="md">
        <Paper elevation={3}>
          <Box mt={5} textAlign={"left"} p={3}>
            <Typography
              variant="h5"
              align="left"
              fontWeight="bold">
              Here’s how it works:
            </Typography>
            <Box mt={3}>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={iconStyle}>
                  <VolumeUpIcon />
                </Box>
                Measure your reading accuracy by matching sounds to the correct
                letter combinations
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={iconStyle}>
                  <AccessTimeFilledIcon />
                </Box>
                <span>
                  On average, the test will take about
                  <span style={{ fontWeight: "600" }}> 15 </span>
                  minutes
                </span>
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "50px" }}>
              <Typography variant="h6">
                When the test is complete, you will be shown your result and
                possible next steps.
              </Typography>
            </Box>

            <Typography variant="body1" color="textSecondary" mt={2}>
              This test is not a formal diagnosis of dyslexia or any other reading
              disorder. It is intended to give an approximation of the test takers
              decoding abilities and offer solutions for improvement.
            </Typography>
            <Grid item xs={6} mt={4} >
              <Box display="flex" width="100%" justifyContent="flex-end" >
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </BackgroundContainer>
  );
};

export default DisclaimerPage;
