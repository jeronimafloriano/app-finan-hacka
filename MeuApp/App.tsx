import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { enableScreens } from 'react-native-screens';
import { Image, View } from 'react-native';
import FinanceScreen from './screens/FinanceScreen';
import HomeScreen from './screens/HomeScreen';
import ConfirmDataScreen from './screens/ConfirmDataScreen';

// Tipos para ícones da tab bar
type TabBarIconProps = {
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }: TabBarIconProps) => {
            if (route.name === 'Home') {
              return <Ionicons name="home-outline" size={size} color={color} />;
              //<Ionicons name="home-outline" size={24} color="black" />;
            } else if (route.name === 'Other1') {
              return <Ionicons name="card" size={size} color={color} />;
            } 

            return null; 
          },
          tabBarActiveTintColor: 'green', 
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                source={require('../MeuApp/assets/logo.png')}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
            ),
            headerTitleAlign: 'center', 
          }}
        />
        <Tab.Screen
          name="Other1"
          component={FinanceScreen}
          options={{
            headerTitle: () => (
              <Image
                source={require('../MeuApp/assets/logo.png')}
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
              />
            ),
            headerTitleAlign: 'center', 
          }}
        />
        <Tab.Screen 
          name="ConfirmDataScreen" 
          component={ConfirmDataScreen} 
          options={{ headerShown: false }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
