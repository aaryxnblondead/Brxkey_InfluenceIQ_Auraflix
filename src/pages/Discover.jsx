import { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  TextField,
  InputAdornment,
  Button,
  Avatar,
  Rating
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function discover() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Technology', 'Business', 'Entertainment', 'Sports', 
    'Lifestyle', 'Education', 'Science', 'Arts'
  ];

  const profiles = [
    {
      id: 1,
      name: 'Alex Rivera',
      category: 'Technology',
      score: 9.4,
      followers: '1.8M',
      tags: ['AI', 'Innovation'],
      image: null,
      description: 'Tech innovator and AI researcher'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      category: 'Business',
      score: 9.2,
      followers: '1.5M',
      tags: ['Startups', 'Leadership'],
      image: null,
      description: 'Serial entrepreneur and mentor'
    },
    {
      id: 3,
      name: 'James Wilson',
      category: 'Sports',
      score: 9.6,
      followers: '2.2M',
      tags: ['Athletics', 'Coaching'],
      image: null,
      description: 'Professional athlete and coach'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Discover Influencers
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by name, category, or expertise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 4 }}
        />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Popular Categories
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {categories.map((category) => (
              <Chip 
                key={category} 
                label={category} 
                onClick={() => {}} 
                clickable
              />
            ))}
          </Box>
        </Box>

        <Grid container spacing={3}>
          {profiles.map((profile) => (
            <Grid item xs={12} sm={6} md={4} key={profile.id}>
              <Card>
                <CardMedia
                  component="div"
                  sx={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'grey.200'
                  }}
                >
                  <Avatar
                    src={profile.image}
                    sx={{ width: 120, height: 120 }}
                  >
                    {profile.name[0]}
                  </Avatar>
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {profile.name}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {profile.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {profile.tags.map((tag) => (
                      <Chip 
                        key={tag} 
                        label={tag} 
                        size="small" 
                        sx={{ mr: 1 }} 
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h5" color="primary" sx={{ mr: 1 }}>
                      {profile.score}
                    </Typography>
                    <Rating value={profile.score / 2} readOnly precision={0.5} />
                  </Box>
                  <Button variant="contained" fullWidth>
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default discover;
