import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Avatar, 
  Box, 
  Chip, 
  Rating,
  Button 
} from '@mui/material';
import { Star, Verified } from '@mui/icons-material';

function FeaturedProfiles() {
  const featuredData = [
    {
      id: 1,
      name: 'Alex Rivera',
      role: 'Tech Innovator',
      score: 9.8,
      verified: true,
      followers: '2.5M',
      expertise: ['AI', 'Blockchain', 'Innovation'],
      image: null
    },
    {
      id: 2,
      name: 'Emily Chen',
      role: 'Digital Strategist',
      score: 9.5,
      verified: true,
      followers: '1.8M',
      expertise: ['Marketing', 'Growth', 'Leadership'],
      image: null
    },
    {
      id: 3,
      name: 'Michael Kim',
      role: 'Startup Founder',
      score: 9.3,
      verified: true,
      followers: '1.2M',
      expertise: ['Entrepreneurship', 'Venture Capital', 'Innovation'],
      image: null
    }
  ];

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Star color="primary" />
            Featured Profiles
          </Typography>
          <Button variant="outlined" size="small">View All</Button>
        </Box>

        <Grid container spacing={3}>
          {featuredData.map((profile) => (
            <Grid item xs={12} md={4} key={profile.id}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Avatar 
                      src={profile.image}
                      sx={{ width: 100, height: 100 }}
                    >
                      {profile.name[0]}
                    </Avatar>

                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <Typography variant="h6">
                          {profile.name}
                        </Typography>
                        {profile.verified && <Verified color="primary" sx={{ width: 20 }} />}
                      </Box>
                      <Typography color="text.secondary">
                        {profile.role}
                      </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" color="primary">
                        {profile.score}
                      </Typography>
                      <Rating value={profile.score / 2} readOnly precision={0.5} />
                    </Box>

                    <Typography variant="body2" color="text.secondary">
                      {profile.followers} followers
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0.5 }}>
                      {profile.expertise.map((tag) => (
                        <Chip 
                          key={tag} 
                          label={tag} 
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>

                    <Button variant="contained" fullWidth>
                      View Profile
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default FeaturedProfiles;
