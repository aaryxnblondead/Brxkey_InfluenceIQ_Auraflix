import * as tf from '@tensorflow/tfjs';
import * as sentimentModel from '@tensorflow-models/sentiment';

let model = null;

export const initModel = async () => {
  if (!model) {
    model = await sentimentModel.load();
  }
  return model;
};

export const analyzeSentiment = async (text) => {
  try {
    const model = await initModel();
    const prediction = await model.predict(text);
    
    // Return sentiment based on score
    if (prediction.score > 0.7) {
      return 'positive';
    } else if (prediction.score < 0.3) {
      return 'negative';
    } else {
      return 'neutral';
    }
  } catch (error) {
    console.error('Error analyzing sentiment:', error);
    return 'neutral'; // Default fallback
  }
};

// Mock function for development
export const mockAnalyzeSentiment = (text) => {
  // Simple keyword-based analysis for testing
  const positiveWords = ['great', 'good', 'excellent', 'amazing', 'love', 'best', 'innovative'];
  const negativeWords = ['bad', 'terrible', 'worst', 'hate', 'poor', 'disappointing'];
  
  const lowerText = text.toLowerCase();
  
  let positiveCount = 0;
  let negativeCount = 0;
  
  positiveWords.forEach(word => {
    if (lowerText.includes(word)) positiveCount++;
  });
  
  negativeWords.forEach(word => {
    if (lowerText.includes(word)) negativeCount++;
  });
  
  if (positiveCount > negativeCount) {
    return 'positive';
  } else if (negativeCount > positiveCount) {
    return 'negative';
  } else {
    return 'neutral';
  }
};
