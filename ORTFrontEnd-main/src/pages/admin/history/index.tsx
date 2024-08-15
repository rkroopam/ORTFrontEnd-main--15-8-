import React from 'react';
import { Typography, Card, CardContent, Grid, Container } from '@mui/material';

const lessons = [
  { id: 1, title: 'Lesson 1: Introduction', duration: '15 minutes' },
  { id: 2, title: 'Lesson 2: Reading Basics', duration: '20 minutes' },
  { id: 3, title: 'Lesson 3: Advanced Techniques', duration: '25 minutes' },
  // Add more lessons as needed
];

const HistoryPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Completed Lessons
      </Typography>
      <Grid container spacing={2}>
        {lessons.map((lesson) => (
          <Grid item xs={12} sm={6} md={4} key={lesson.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {lesson.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Duration: {lesson.duration}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HistoryPage;
