import React from "react";
import { Container, Typography, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SuccessPage = () => {
  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        <CheckCircleIcon
          data-testid="CheckCircleIcon"
          color="success"
          fontSize="large"
        />
        <Typography variant="h4" gutterBottom>
          Payment Successful
        </Typography>
        <Typography variant="body1">
          Your payment has been processed successfully. Thank you!
        </Typography>
      </Box>
    </Container>
  );
};

export default SuccessPage;
