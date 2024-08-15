import React from "react";
import { Container, Paper, Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "../../../components/BackgroundContainer";

const RegularTestPage = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/test-level-page"); // Redirects to the first question of the regular test
  };

  return (
    <BackgroundContainer>
      <Container component="main" maxWidth="md">
        <Paper elevation={3}>
          <Box p={4} mt={5}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              You're ready to start the test!
            </Typography>
            <Box mt={3}>
              <Typography variant="body1">
                The regular test consists of several questions designed to assess
                your reading skills.
              </Typography>
              <Typography variant="body1" mt={2}>
                Please follow the instructions and answer each question to the
                best of your ability.
              </Typography>
            </Box>
            <Grid item xs={6} mt={3}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleStartTest}
              >
                start test
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </BackgroundContainer>
  );
};

export default RegularTestPage;
