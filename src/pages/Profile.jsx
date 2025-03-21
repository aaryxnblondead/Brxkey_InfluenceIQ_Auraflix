import { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box,
  Avatar,
  Button,
  Divider 
} from '@mui/material';
import ScoreBreakdown from '../components/profile/ScoreBreakdown';
import EngagementChart from '../components/profile/EngagementChart';
import Achievements from '../components/profile/Achievements';
import Reviews from '../components/profile/Reviews';

function Profile() {
  const [profile] = useState({
    id: 1,
    name: 'John Doe',
    role: 'Tech Entrepreneur',
    overallScore: 8.5,
    followers: '2.5M',
    credibility: 9.0,
    longevity: 8.0,
    engagement: 8.5
  });

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Profile Header */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={3} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ width: 120, height: 120 }}>{profile.name[0]}</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h4">{profile.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {profile.role}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                        Follow
                      </Button>
                      <Button variant="outlined">Share Profile</Button>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" color="primary">
                      {profile.overallScore}
                    </Typography>
                    <Typography variant="subtitle2">InfluenceIQ Score</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Score Breakdown */}
          <Grid item xs={12} md={4}>
            <ScoreBreakdown profile={profile} />
          </Grid>

          {/* Engagement Chart */}
          <Grid item xs={12} md={8}>
            <EngagementChart />
          </Grid>

          {/* Achievements */}
          <Grid item xs={12} md={6}>
            <Achievements />
          </Grid>

          {/* Reviews */}
          <Grid item xs={12}>
            <Reviews />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Profile;
