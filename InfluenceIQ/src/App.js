import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import Navigation from './navigation';
import { initModel } from './services/sentimentAnalysis';

const App = () => {
  // Initialize the sentiment analysis model on app start
  useEffect(() => {
    const loadModel = async () => {
      try {
        await initModel();
        console.log('Sentiment analysis model loaded successfully');
      } catch (error) {
        console.error('Failed to load sentiment analysis model:', error);
      }
    };
    
    loadModel();
  }, []);

  return (
    <>
      {Platform.OS !== 'web' && <StatusBar barStyle="dark-content" />}
      <Navigation />
    </>
  );
};

export default App;
