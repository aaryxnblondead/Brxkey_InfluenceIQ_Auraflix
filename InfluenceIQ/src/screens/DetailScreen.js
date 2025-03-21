import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  StyleSheet, 
  ActivityIndicator,
  SafeAreaView,
  Platform
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ReviewItem from '../components/ReviewItem';
import ReviewForm from '../components/ReviewForm';
import { getPublicFigureById, addReview } from '../services/mockData';

const DetailScreen = () => {
  const [figure, setFigure] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get the figure ID from route params
  const route = useRoute();
  const navigation = useNavigation();
  
  // For web, we need to parse the ID from the URL
  const getFigureId = () => {
    if (Platform.OS === 'web') {
      const pathParts = window.location.pathname.split('/');
      return pathParts[pathParts.length - 1];
    } else {
      return route.params?.id;
    }
  };
  
  const figureId = getFigureId();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPublicFigureById(figureId);
        setFigure(data);
        
        // Set screen title for mobile
        if (Platform.OS !== 'web' && navigation) {
          navigation.setOptions({ title: data.name });
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, [figureId, navigation]);
  
  const handleReviewSubmit = async (review) => {
    try {
      const updatedFigure = await addReview(figureId, review);
      setFigure(updatedFigure);
    } catch (err) {
      console.error('Error submitting review:', err);
    }
  };
  
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#4CAF50" />
        <Text style={styles.loadingText}>Loading profile data...</Text>
      </View>
    );
  }
  
  if (error || !figure) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error || 'Figure not found'}</Text>
      </View>
    );
  }
  
  // Calculate sentiment stats
  const sentimentStats = {
    positive: 0,
    neutral: 0,
    negative: 0,
    total: figure.reviews.length
  };
  
  figure.reviews.forEach(review => {
    sentimentStats[review.sentiment] += 1;
  });
  
  const positivePercentage = Math.round((sentimentStats.positive / sentimentStats.total) * 100) || 0;
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.profileHeader}>
          <Image source={{ uri: figure.image }} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{figure.name}</Text>
            <Text style={styles.role}>{figure.role}</Text>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreLabel}>InfluenceIQ Score:</Text>
              <Text style={styles.score}>{figure.scores.overall}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bioSection}>
          <Text style={styles.bioText}>{figure.bio}</Text>
        </View>

        <View style={styles.metricsSection}>
          <Text style={styles.sectionTitle}>Influence Metrics</Text>
          <View style={styles.metricsContainer}>
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{figure.scores.credibility}</Text>
              <Text style={styles.metricLabel}>Credibility</Text>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{figure.scores.longevity}</Text>
              <Text style={styles.metricLabel}>Longevity</Text>
            </View>
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{figure.scores.engagement}</Text>
              <Text style={styles.metricLabel}>Engagement</Text>
            </View>
          </View>
        </View>

        <View style={styles.insightsSection}>
          <Text style={styles.sectionTitle}>AI-Powered Insights</Text>
          <View style={styles.insightCard}>
            <Text style={styles.insightText}>
              This figure has a {positivePercentage}% positive sentiment based on {sentimentStats.total} reviews.
            </Text>
          </View>
          <View style={styles.insightCard}>
            <Text style={styles.insightText}>
              Their credibility score is {figure.scores.credibility > 90 ? 'excellent' : figure.scores.credibility > 80 ? 'very good' : 'good'}, 
              indicating {figure.scores.credibility > 90 ? 'high trustworthiness and factual accuracy' : 'generally reliable information with occasional inconsistencies'}.
            </Text>
          </View>
        </View>

        <View style={styles.reviewsSection}>
          <Text style={styles.sectionTitle}>Reviews ({figure.reviews.length})</Text>
          {figure.reviews.length > 0 ? (
            figure.reviews.map(review => (
              <ReviewItem key={review.id} review={review} />
            ))
          ) : (
            <Text style={styles.noReviewsText}>No reviews yet. Be the first to review!</Text>
          )}
        </View>

        <ReviewForm onSubmit={handleReviewSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 16,
    marginRight: 5,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  bioSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
  },
  metricsSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricCard: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  metricLabel: {
    fontSize: 14,
    color: '#666',
  },
  insightsSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  insightCard: {
    backgroundColor: '#f0f7ff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  insightText: {
    fontSize: 14,
    lineHeight: 20,
  },
  reviewsSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  noReviewsText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default DetailScreen;