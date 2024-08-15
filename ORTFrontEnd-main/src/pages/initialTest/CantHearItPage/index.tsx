import React, { useState } from "react";
import { Container, Paper, Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import HeadsetRoundedIcon from "@mui/icons-material/HeadsetRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";

const CantHearItPage = () => {
  const navigate = useNavigate();
  const [audio] = useState(new Audio("/path/to/audio/file.mp3"));
  const theme = useTheme();

  // Function to play the audio when the button is clicked
  const handlePlayAudio = () => {
    audio.play();
  };

  // Function to navigate to the next page when the user clicks "I hear it"
  const handleNext = () => {
    navigate("/regular-test-page");
  };
  const iconStyle = {
    color: theme.palette.primary.main, // Green color for the icon
    backgroundColor: theme.palette.primary.light, // Light green background
    borderRadius: "50%", // Circular container
    padding: "8px", // Padding to adjust the size of the circle
    display: "inline-flex", // Align with text
    alignItems: "center", // Center the icon vertically
    justifyContent: "center",
    marginRight: "10px",
  };
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3}>
        <Box p={4} mt={5}>
          <Typography variant="h5" align="center">
            Can't Hear:
          </Typography>
          <Box mt={3}>
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
                Make sure your device is not on mute.
              </Typography>
            </Box>
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
                  <HeadsetRoundedIcon />
                </Box>
                Check to see if your headphones are connected.
              </Typography>
            </Box>
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
                  <SettingsRoundedIcon />
                </Box>
                Adjust app sound settings in your phone's settings menu.
              </Typography>
            </Box>
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
                  <RemoveCircleRoundedIcon />
                </Box>
                Turn off 'Do Not Disturb' mode..
              </Typography>
            </Box>
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
                  <PowerSettingsNewRoundedIcon />
                </Box>
                Reboot your device.
              </Typography>
            </Box>
          </Box>
          <Box mt={3} display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handlePlayAudio}
              style={{ marginBottom: "16px" }}
            >
              Tap to hear again
            </Button>
            <Button variant="contained" color="secondary" onClick={handleNext}>
              I hear it
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default CantHearItPage;
