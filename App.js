import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppHome from './Components/AppHome';
import LandmarksScreen from './Components/LandmarksScreen';
import ContactScreen from './Components/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={AppHome} />
        <Tab.Screen name='Landmarks' component={LandmarksScreen} />
        <Tab.Screen name='Contact' component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
