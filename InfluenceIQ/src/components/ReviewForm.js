import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { mockAnalyzeSentiment } from '../services/sentimentAnalysis';

const ReviewForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState('');

  // Mock CAPTCHA verification for development
  const verifyCaptcha = () => {
    // In a real app, this would call the CAPTCHA service
    setCaptchaVerified(true);
    return true;
  };

  const handleSubmit = async () => {
    // Validate inputs
    if (!username.trim() || !review.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Verify CAPTCHA if not already verified
    if (!captchaVerified && !verifyCaptcha()) {
      setError('Please complete the CAPTCHA verification');
      return;
    }

    // Analyze sentiment (using mock for development)
    const sentiment = await mockAnalyzeSentiment(review);

    // Submit the review
    onSubmit({
      user: username,
      text: review,
      rating,
      sentiment
    });

    // Reset form
    setUsername('');
    setReview('');
    setRating(5);
    setCaptchaVerified(false);
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a Review</Text>
      
      {error ? <Text style={styles.error}>{error}</Text> : null}
      
      <TextInput
        style={styles.input}
        placeholder="Your Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Write your review here..."
        value={review}
        onChangeText={setReview}
        multiline
        numberOfLines={Platform.OS === 'ios' ? null : 4}
        minHeight={Platform.OS === 'ios' ? 80 : null}
      />
      
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingLabel}>Rating:</Text>
        <View style={styles.ratingButtons}>
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity
              key={num}
              style={[
                styles.ratingButton,
                rating === num && styles.selectedRating
              ]}
              onPress={() => setRating(num)}
            >
              <Text style={[
                styles.ratingButtonText,
                rating === num && styles.selectedRatingText
              ]}>
                {num}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.captchaContainer}>
        <Text style={styles.captchaText}>
          {captchaVerified ? "✓ CAPTCHA verified" : "Please verify you're human"}
        </Text>
        {!captchaVerified && (
          <TouchableOpacity 
            style={styles.captchaButton} 
            onPress={verifyCaptcha}
          >
            <Text style={styles.captchaButtonText}>Verify CAPTCHA</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <TouchableOpacity 
        style={styles.submitButton} 
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  textArea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  ratingLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  ratingButtons: {
    flexDirection: 'row',
  },
  ratingButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  selectedRating: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  ratingButtonText: {
    fontSize: 16,
  },
  selectedRatingText: {
    color: '#fff',
  },
  captchaContainer: {
    marginBottom: 16,
  },
  captchaText: {
    marginBottom: 8,
  },
  captchaButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  captchaButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReviewForm;
