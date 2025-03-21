import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar 
} from '@mui/material';

function LeaderboardSection() {
  const topInfluencers = [
    { id: 1, name: 'John Doe', score: 9.8, industry: 'Tech' },
    { id: 2, name: 'Jane Smith', score: 9.5, industry: 'Entertainment' },
    // Add more sample data
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Top Ranked Influencers
        </Typography>
        <List>
          {topInfluencers.map((influencer) => (
            <ListItem key={influencer.id}>
              <ListItemAvatar>
                <Avatar>{influencer.name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={influencer.name}
                secondary={`${influencer.industry} • Score: ${influencer.score}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default LeaderboardSection;
