import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReviewItem = ({ review }) => {
  const getSentimentColor = () => {
    switch (review.sentiment) {
      case 'positive':
        return '#4CAF50';
      case 'negative':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{review.user}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{review.rating}/5</Text>
          <View 
            style={[
              styles.sentimentIndicator, 
              { backgroundColor: getSentimentColor() }
            ]} 
          />
        </View>
      </View>
      <Text style={styles.text}>{review.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    marginRight: 8,
  },
  sentimentIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});