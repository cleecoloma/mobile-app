import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';import { Ionicons } from '@expo/vector-icons';
import AppHome from './Components/AppHome';
import LandmarksScreen from './Components/LandmarksScreen';
import ContactScreen from './Components/ContactScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={AppHome}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Landmarks'
          component={LandmarksScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='map' color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name='Contact'
          component={ContactScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person' color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
