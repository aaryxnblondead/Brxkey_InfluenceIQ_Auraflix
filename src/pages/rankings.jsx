import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab,
  Avatar,
  Rating,
  Chip,
  Button,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';

function rankings() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [timeRange, setTimeRange] = useState('weekly');

  const categories = [
    'Overall',
    'Technology',
    'Business',
    'Entertainment',
    'Sports',
    'Lifestyle'
  ];

  const rankingsData = [
    {
      id: 1,
      name: 'Emma Watson',
      category: 'Technology',
      score: 9.8,
      position: 1,
      change: '+2',
      followers: '3.2M',
      tags: ['AI', 'Innovation', 'Leadership'],
      image: null
    },
    {
      id: 2,
      name: 'David Chen',
      category: 'Technology',
      score: 9.6,
      position: 2,
      change: '-1',
      followers: '2.8M',
      tags: ['Startups', 'Web3', 'Tech'],
      image: null
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      category: 'Business',
      score: 9.4,
      position: 3,
      change: '+5',
      followers: '2.1M',
      tags: ['Finance', 'Leadership', 'Strategy'],
      image: null
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4">
            Influencer Rankings
          </Typography>
          
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              size="small"
            >
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Tabs 
          value={selectedTab} 
          onChange={(e, newValue) => setSelectedTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 4 }}
        >
          {categories.map((category) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>

        <Grid container spacing={3}>
          {rankingsData.map((profile) => (
            <Grid item xs={12} key={profile.id}>
              <Card>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <Typography variant="h4" color="primary">
                        #{profile.position}
                      </Typography>
                      <Chip 
                        label={profile.change} 
                        color={profile.change.includes('+') ? 'success' : 'error'}
                        size="small"
                      />
                    </Grid>

                    <Grid item>
                      <Avatar src={profile.image} sx={{ width: 80, height: 80 }}>
                        {profile.name[0]}
                      </Avatar>
                    </Grid>

                    <Grid item xs>
                      <Typography variant="h6">{profile.name}</Typography>
                      <Typography color="text.secondary">
                        {profile.category} • {profile.followers} followers
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        {profile.tags.map((tag) => (
                          <Chip key={tag} label={tag} size="small" sx={{ mr: 1 }} />
                        ))}
                      </Box>
                    </Grid>

                    <Grid item>
                      <Typography variant="h4" color="primary">
                        {profile.score}
                      </Typography>
                      <Rating value={profile.score / 2} readOnly precision={0.5} />
                    </Grid>

                    <Grid item>
                      <Button variant="outlined">View Profile</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default rankings;
