import React, { useState } from "react";
import { Container, Paper, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackgroundContainer } from "../../../components/BackgroundContainer";

interface InstructionsPage2Props {
  title: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
}

const DisClaimerPage2 = () => {
  const [audio] = useState(new Audio("/path/to/audio/file.mp3"));
  const navigate = useNavigate();

  const handlePlayAudio = () => {
    audio.play();
  };
  const handleHearIt = () => {
    navigate("/regular-test-page");
  };
  const handleDontHearIt = () => {
    navigate("/cant-hearit-page");
  };
  return (
    <BackgroundContainer>
    <Container component="main" maxWidth="md">
      <Paper elevation={3}>
        <Box p={4} mt={5}>
          <Typography variant="h5" align="center">
            Before we start:
          </Typography>
          <Box mt={3}>
            <Typography variant="body1">
              Find a quiet place. A quiet room is best so you can focus on the
              sounds in the test.
            </Typography>
            <Typography variant="body1" mt={2}>
              Remove all distractions. No distractions means a more accurate
              final score!
            </Typography>
            <Typography variant="body1" mt={2}>
              Make sure the sound is on. Our test only works if you can hear all
              the sounds.
            </Typography>
            <Box mt={2} display="flex" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handlePlayAudio}
              >
                Play sound to hear
              </Button>
            </Box>
          </Box>
          <Box mt={3} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Did you hear the instructions?
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleHearIt()}
              sx={{ mr: 2 }} // Margin right to add space between buttons
            >
              I hear it
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDontHearIt()}
            >
              I don't hear it
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
    </BackgroundContainer>
  );
};

export default DisClaimerPage2;
