import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

function ScoreBreakdown({ profile }) {
  const scores = [
    { label: 'Credibility', value: profile.credibility },
    { label: 'Longevity', value: profile.longevity },
    { label: 'Engagement', value: profile.engagement }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Score Breakdown
        </Typography>
        {scores.map((score) => (
          <Box key={score.label} sx={{ my: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">{score.label}</Typography>
              <Typography variant="body2" color="primary">{score.value}/10</Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={score.value * 10} 
              sx={{ height: 8, borderRadius: 4 }}
            />
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}

export default ScoreBreakdown;
