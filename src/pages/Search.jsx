import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  Avatar,
  Rating,
  Pagination,
  Autocomplete,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  GridView as GridViewIcon,
  List as ListViewIcon,
  BookmarkBorder as SaveIcon,
  Bookmark as SavedIcon
} from '@mui/icons-material';

const FILTER_PRESETS = {
  trending: {
    name: 'Trending',
    filters: {
      industry: 'all',
      scoreRange: '80-100',
      sortBy: 'trending'
    }
  },
  topTech: {
    name: 'Top Tech',
    filters: {
      industry: 'technology',
      scoreRange: '90-100',
      sortBy: 'score'
    }
  },
  risingStars: {
    name: 'Rising Stars',
    filters: {
      scoreRange: '70-90',
      sortBy: 'growth'
    }
  }
};

const ADVANCED_SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'score', label: 'InfluenceIQ Score' },
  { value: 'followers', label: 'Follower Count' },
  { value: 'trending', label: 'Trending' },
  { value: 'engagement', label: 'Engagement Rate' },
  { value: 'growth', label: 'Growth Rate' }
];

function Search() {
  const [filters, setFilters] = useState({
    industry: '',
    region: '',
    scoreRange: '',
    sortBy: 'relevance'
  });
  const [viewMode, setViewMode] = useState('grid');
  const [savedSearches, setSavedSearches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearchSaved, setIsSearchSaved] = useState(false);

  const [searchResults] = useState([
    {
      id: 1,
      name: 'Emma Thompson',
      industry: 'Technology',
      score: 9.2,
      followers: '1.2M',
      tags: ['AI', 'Innovation', 'Leadership'],
      image: null
    },
    // Add more mock data here
  ]);

  // Mock suggestions data
  const searchSuggestions = [
    { label: 'Tech Influencers', category: 'Popular Searches' },
    { label: 'Startup Founders', category: 'Popular Searches' },
    { label: 'AI Experts', category: 'Trending' },
    { label: 'Female Entrepreneurs', category: 'Categories' }
  ];

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  const handleViewModeChange = (event, newMode) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  const handleSaveSearch = () => {
    const newSavedSearch = {
      term: searchTerm,
      filters: filters,
      timestamp: new Date().toISOString()
    };
    setSavedSearches([...savedSearches, newSavedSearch]);
    setIsSearchSaved(true);
  };

  const applyPreset = (presetKey) => {
    setFilters({ ...filters, ...FILTER_PRESETS[presetKey].filters });
  };

  const renderResults = () => {
    if (viewMode === 'grid') {
      return (
        <Grid container spacing={3}>
          {searchResults.map((result) => (
            <Grid item xs={12} sm={6} md={4} key={result.id}>
              <Card key={result.id} sx={{ mb: 2 }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Avatar 
                        sx={{ width: 80, height: 80 }}
                        src={result.image}
                      >
                        {result.name[0]}
                      </Avatar>
                    </Grid>
                    
                    <Grid item xs>
                      <Typography variant="h6">{result.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {result.industry} • {result.followers} followers
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        {result.tags.map((tag) => (
                          <Chip 
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{ mr: 1 }}
                          />
                        ))}
                      </Box>
                    </Grid>
                    
                    <Grid item>
                      <Typography variant="h4" color="primary">
                        {result.score}
                      </Typography>
                      <Rating value={result.score / 2} readOnly precision={0.5} />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    }

    return (
      <Box>
        {searchResults.map((result) => (
          <Card key={result.id} sx={{ mb: 2 }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar 
                    sx={{ width: 80, height: 80 }}
                    src={result.image}
                  >
                    {result.name[0]}
                  </Avatar>
                </Grid>
                
                <Grid item xs>
                  <Typography variant="h6">{result.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {result.industry} • {result.followers} followers
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {result.tags.map((tag) => (
                      <Chip 
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ mr: 1 }}
                      />
                    ))}
                  </Box>
                </Grid>
                
                <Grid item>
                  <Typography variant="h4" color="primary">
                    {result.score}
                  </Typography>
                  <Rating value={result.score / 2} readOnly precision={0.5} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Filters Section */}
        <Grid item xs={12} md={3}>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Presets
              </Typography>
              {Object.entries(FILTER_PRESETS).map(([key, preset]) => (
                <Button
                  key={key}
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 1 }}
                  onClick={() => applyPreset(key)}
                >
                  {preset.name}
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Filters
              </Typography>
              
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Industry</InputLabel>
                <Select
                  name="industry"
                  value={filters.industry}
                  onChange={handleFilterChange}
                  label="Industry"
                >
                  <MenuItem value="technology">Technology</MenuItem>
                  <MenuItem value="entertainment">Entertainment</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="sports">Sports</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Region</InputLabel>
                <Select
                  name="region"
                  value={filters.region}
                  onChange={handleFilterChange}
                  label="Region"
                >
                  <MenuItem value="global">Global</MenuItem>
                  <MenuItem value="northAmerica">North America</MenuItem>
                  <MenuItem value="europe">Europe</MenuItem>
                  <MenuItem value="asia">Asia</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Score Range</InputLabel>
                <Select
                  name="scoreRange"
                  value={filters.scoreRange}
                  onChange={handleFilterChange}
                  label="Score Range"
                >
                  <MenuItem value="90-100">90-100</MenuItem>
                  <MenuItem value="80-90">80-90</MenuItem>
                  <MenuItem value="70-80">70-80</MenuItem>
                  <MenuItem value="0-70">Below 70</MenuItem>
                </Select>
              </FormControl>

              <Button variant="contained" fullWidth>
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Search Results Section */}
        <Grid item xs={12} md={9}>
          <Box sx={{ mb: 3 }}>
            <Autocomplete
              freeSolo
              options={searchSuggestions}
              groupBy={(option) => option.category}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  placeholder="Search influencers, entrepreneurs, athletes..."
                />
              )}
              onChange={(event, value) => setSearchTerm(typeof value === 'string' ? value : value?.label)}
            />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Showing {searchResults.length} results
                </Typography>
                <ToggleButtonGroup
                  value={viewMode}
                  exclusive
                  onChange={handleViewModeChange}
                  size="small"
                >
                  <ToggleButton value="grid">
                    <GridViewIcon />
                  </ToggleButton>
                  <ToggleButton value="list">
                    <ListViewIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Tooltip title={isSearchSaved ? "Search Saved" : "Save Search"}>
                  <IconButton onClick={handleSaveSearch}>
                    {isSearchSaved ? <SavedIcon color="primary" /> : <SaveIcon />}
                  </IconButton>
                </Tooltip>

                <FormControl sx={{ minWidth: 200 }}>
                  <Select
                    size="small"
                    name="sortBy"
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                  >
                    {ADVANCED_SORT_OPTIONS.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>

          {renderResults()}

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination count={10} color="primary" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Search;