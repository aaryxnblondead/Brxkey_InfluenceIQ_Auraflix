import { 
  Card, 
  CardContent, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Chip
} from '@mui/material';
import {
  EmojiEvents as TrophyIcon,
  WorkspacePremium as PremiumIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';

function Achievements() {
  const achievements = [
    {
      id: 1,
      title: 'Top Tech Influencer 2023',
      description: 'Ranked #1 in Technology category',
      date: 'Dec 2023',
      icon: <TrophyIcon color="primary" />
    },
    {
      id: 2,
      title: 'Verified Expert',
      description: 'Recognized authority in AI & Machine Learning',
      date: 'Oct 2023',
      icon: <VerifiedIcon color="primary" />
    },
    {
      id: 3,
      title: 'Premium Creator',
      description: '1M+ engaged followers across platforms',
      date: 'Sep 2023',
      icon: <PremiumIcon color="primary" />
    }
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Achievements & Milestones
        </Typography>
        
        <List>
          {achievements.map((achievement) => (
            <ListItem key={achievement.id}>
              <ListItemIcon>
                {achievement.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">
                    {achievement.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      {achievement.description}
                    </Typography>
                    <Chip 
                      label={achievement.date} 
                      size="small" 
                      sx={{ mt: 1 }}
                    />
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

export default Achievements;
