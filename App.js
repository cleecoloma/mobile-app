import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import AppHome from './Components/Home';
import LandmarksScreen from './Components/LandmarksScreen';
import ContactScreen from './Components/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={AppHome} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Landmarks' component={LandmarksScreen} />
        <Tab.Screen name='Contact' component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
