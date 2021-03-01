import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from './SCREENS/OnboardingScreen';
import LoginScreen from './SCREENS/LoginScreen';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <AppStack.Screen name="LoginScreen" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
