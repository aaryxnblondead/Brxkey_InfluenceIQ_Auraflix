import { Card, CardContent, Grid, Typography, Avatar, Box, Rating, Chip } from '@mui/material';

function ResultListItem({ result }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              sx={{ width: 80, height: 80 }}
              src={result.image}
            >
              {result.name[0]}
            </Avatar>
          </Grid>
          
          <Grid item xs>
            <Typography variant="h6">{result.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {result.industry} • {result.followers} followers
            </Typography>
            <Box sx={{ mt: 1 }}>
              {result.tags.map((tag) => (
                <Chip 
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{ mr: 1 }}
                />
              ))}
            </Box>
          </Grid>
          
          <Grid item>
            <Typography variant="h4" color="primary">
              {result.score}
            </Typography>
            <Rating value={result.score / 2} readOnly precision={0.5} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ResultListItem;
