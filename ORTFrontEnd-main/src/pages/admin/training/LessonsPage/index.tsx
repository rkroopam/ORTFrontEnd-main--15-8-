import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, LinearProgress, IconButton } from '@mui/material';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const lessons = [
  { id: 1, title: 'Lesson 1: Introduction', completed: true },
  { id: 2, title: 'Lesson 2: Reading Basics', completed: false },
  { id: 3, title: 'Lesson 3: Advanced Techniques', completed: false },
  // Add more lessons as needed
];

const LessonsPage = () => {
  const [currentLesson, setCurrentLesson] = useState(lessons[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkip = () => {
    const nextLessonIndex = lessons.findIndex(lesson => lesson.id === currentLesson.id) + 1;
    if (nextLessonIndex < lessons.length) {
      setCurrentLesson(lessons[nextLessonIndex]);
      setIsPlaying(false);  // Pause when skipping to the next lesson
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {currentLesson.title}
      </Typography>

      {/* Video Controls */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <IconButton onClick={handlePlayPause} color="primary">
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <LinearProgress variant="determinate" value={isPlaying ? 50 : 0} sx={{ flexGrow: 1, margin: '0 10px' }} />
        <IconButton onClick={handleSkip} color="secondary" disabled={lessons.findIndex(lesson => lesson.id === currentLesson.id) === lessons.length - 1}>
          <SkipNextIcon />
        </IconButton>
      </div>

      {/* Next Lessons */}
      <Typography variant="h5" gutterBottom>
        Next Lessons
      </Typography>
      <Grid container spacing={2}>
        {lessons.map((lesson) => (
          <Grid item xs={12} sm={6} md={4} key={lesson.id}>
            <Card style={{ display: 'flex', alignItems: 'center' }}>
              <CardContent style={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                  {lesson.title}
                </Typography>
              </CardContent>
              {lesson.completed && (
                <CheckCircleIcon color="success" style={{ marginRight: '10px' }} />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LessonsPage;
