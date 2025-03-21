import { Card, CardContent, Typography, Avatar, Box, Rating, Chip } from '@mui/material';

function ResultCard({ result }) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            sx={{ width: 100, height: 100, mb: 2 }}
            src={result.image}
          >
            {result.name[0]}
          </Avatar>
          <Typography variant="h6" align="center">{result.name}</Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {result.industry} • {result.followers} followers
          </Typography>
          <Box sx={{ mt: 2, mb: 1 }}>
            <Typography variant="h4" color="primary" align="center">
              {result.score}
            </Typography>
            <Rating value={result.score / 2} readOnly precision={0.5} />
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0.5 }}>
            {result.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ResultCard;
