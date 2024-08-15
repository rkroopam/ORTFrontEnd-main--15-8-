import React from "react";
import { Container, Typography, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const FailedPage = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <CancelIcon color="error" fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Payment Failed
        </Typography>
        <Typography variant="body1">
          Your payment was Failed. If you have any questions, please contact us.
        </Typography>
      </Box>
    </Container>
  );
};

export default FailedPage;
