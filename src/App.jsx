import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import Onboarding from './pages/Onboarding';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E3B55',
    },
    secondary: {
      main: '#FF6B6B',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: 'none',
            background: 'transparent',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          width: '100vw',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3.5rem',
      },
    },
    h2: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
    },
    body1: {
      fontSize: '1rem',
      '@media (min-width:600px)': {
        fontSize: '1.1rem',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100vw' }}>
        <Router>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;