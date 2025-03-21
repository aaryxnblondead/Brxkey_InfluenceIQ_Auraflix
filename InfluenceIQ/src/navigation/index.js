import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';

// Screens
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createStackNavigator();
const history = createBrowserHistory();

// Mobile Navigation
const MobileNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'InfluenceIQ' }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Web Navigation
const WebNavigation = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/detail/:id" component={DetailScreen} />
      </Switch>
    </Router>
  );
};

// Export based on platform
export default Platform.OS === 'web' ? WebNavigation : MobileNavigation;
