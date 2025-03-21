import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Rating,
  TextField
} from '@mui/material';

function Reviews() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews] = useState([
    {
      id: 1,
      user: 'Alice Smith',
      rating: 4.5,
      comment: 'Consistently delivers valuable content and maintains high credibility.',
      date: '2023-06-15'
    },
    // Add more reviews
  ]);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <Typography variant="h6">Reviews</Typography>
          <Button 
            variant="contained" 
            onClick={() => setShowReviewForm(!showReviewForm)}
          >
            Write Review
          </Button>
        </Box>

        {showReviewForm && (
          <Box sx={{ mb: 4 }}>
            <Typography variant="subtitle1" gutterBottom>
              Your Review
            </Typography>
            <Rating sx={{ mb: 2 }} />
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Share your thoughts..."
              sx={{ mb: 2 }}
            />
            <Button variant="contained">Submit Review</Button>
          </Box>
        )}

        <List>
          {reviews.map((review) => (
            <ListItem key={review.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{review.user[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle2">{review.user}</Typography>
                    <Rating value={review.rating} readOnly size="small" />
                  </Box>
                }
                secondary={
                  <>
                    <Typography variant="body2" color="text.primary">
                      {review.comment}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {review.date}
                    </Typography>
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

export default Reviews;
