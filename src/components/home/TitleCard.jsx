import { Box, Typography } from '@mui/material';

function TitleCard() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2E3B55 30%, #3F51B5 90%)',
        color: 'white',
        borderRadius: 2,
        mb: 4
      }}
    >
      <Typography 
        variant="h1" 
        sx={{ 
          fontSize: { xs: '3rem', md: '6rem' },
          fontWeight: 'bold',
          letterSpacing: '0.2rem'
        }}
      >
        InfluenceIQ
      </Typography>
      <Typography 
        variant="h5"
        sx={{ 
          mt: 2,
          opacity: 0.9
        }}
      >
        Measure What Matters
      </Typography>
    </Box>
  );
}

export default TitleCard;
