import React from 'react';
import { Typography, Button, Card, CardContent, Grid, Container } from '@mui/material';

const lessons = [
  { id: 1, title: 'Lesson 1: Introduction', status: 'Pass', started: true },
  { id: 2, title: 'Lesson 2: Reading Basics', status: 'Fail', started: true },
  { id: 3, title: 'Lesson 3: Advanced Techniques', status: '', started: false },
  // Add more lessons as needed
];

const TrainingPage = () => {
  const handleContinue = (lessonId:any) => {
    // Logic to continue the lesson, e.g., redirect to lesson page
    console.log(`Continuing lesson with ID: ${lessonId}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Training
      </Typography>
      <Grid container spacing={2}>
        {lessons.map((lesson) => (
          <Grid item xs={12} sm={6} md={4} key={lesson.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {lesson.title}
                </Typography>
                {lesson.started && (
                  <Typography variant="body2" color="text.secondary">
                    Status: {lesson.status || 'In Progress'}
                  </Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleContinue(lesson.id)}
                  disabled={!lesson.started}
                  sx={{ marginTop: 2 }}
                >
                  {lesson.started ? 'Continue' : 'Not Started'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrainingPage;
