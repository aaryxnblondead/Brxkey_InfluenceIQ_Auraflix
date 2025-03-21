import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent,
  TextField,
  Box 
} from '@mui/material';
import TitleCard from '../components/home/TitleCard';
import LeaderboardSection from '../components/home/LeaderboardSection';
import TrendingFigures from '../components/home/TrendingFigures';
import FeaturedProfiles from '../components/home/FeaturedProfiles';


function Home() {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TitleCard />
      </Box>
      <Box 
        sx={{ 
          my: 4, 
          height: 'calc(100vh - 100px)', 
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none'
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for influencers, entrepreneurs, athletes..."
          sx={{ mb: 4 }}
        />
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <LeaderboardSection />
          </Grid>
          <Grid item xs={12} md={4}>
            <TrendingFigures />
          </Grid>
          <Grid item xs={12}>
            <FeaturedProfiles />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;