import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar, 
  Box, 
  Chip 
} from '@mui/material';
import { TrendingUp } from '@mui/icons-material';

function TrendingFigures() {
  const trendingData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      category: 'Tech',
      growth: '+45%',
      image: null,
      description: 'AI researcher & tech evangelist'
    },
    {
      id: 2,
      name: 'Mark Chen',
      category: 'Business',
      growth: '+38%',
      image: null,
      description: 'Startup founder & mentor'
    },
    {
      id: 3,
      name: 'Lisa Zhang',
      category: 'Innovation',
      growth: '+32%',
      image: null,
      description: 'Product strategist'
    }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TrendingUp color="primary" />
          Trending Figures
        </Typography>

        <List>
          {trendingData.map((figure) => (
            <ListItem key={figure.id}>
              <ListItemAvatar>
                <Avatar src={figure.image}>
                  {figure.name[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {figure.name}
                    <Chip 
                      label={figure.growth} 
                      size="small" 
                      color="success"
                      sx={{ fontWeight: 'bold' }}
                    />
                  </Box>
                }
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {figure.category}
                    </Typography>
                    {` — ${figure.description}`}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default TrendingFigures;
