import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfluenceCard = ({ figure }) => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    if (Platform.OS === 'web') {
      // For web, use window.location
      window.location.href = `/detail/${figure.id}`;
    } else {
      // For mobile, use React Navigation
      navigation.navigate('Detail', { id: figure.id, name: figure.name });
    }
  };
  
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: figure.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{figure.name}</Text>
        <Text style={styles.role}>{figure.role}</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>InfluenceIQ Score:</Text>
          <Text style={styles.score}>{figure.scores.overall}</Text>
        </View>
        <View style={styles.metricsContainer}>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Credibility</Text>
            <Text style={styles.metricValue}>{figure.scores.credibility}</Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Longevity</Text>
            <Text style={styles.metricValue}>{figure.scores.longevity}</Text>
          </View>
          <View style={styles.metric}>
            <Text style={styles.metricLabel}>Engagement</Text>
            <Text style={styles.metricValue}>{figure.scores.engagement}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  scoreLabel: {
    fontSize: 14,
    marginRight: 5,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metric: {
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 12,
    color: '#666',
  },
  metricValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default InfluenceCard;
