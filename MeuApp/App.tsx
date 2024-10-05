import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { enableScreens } from 'react-native-screens';
import { Image, View } from 'react-native';
import FinanceScreen from './screens/FinanceScreen';
import HomeScreen from './screens/HomeScreen';
import ConfirmDataScreen from './screens/ConfirmDataScreen';
import ConteudoScreen from './screens/ConteudoScreen';

// Tipos para ícones da tab bar
type TabBarIconProps = {
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

enableScreens();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
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
      <Stack.Screen 
        name="ConfirmDataScreen" 
        component={ConfirmDataScreen} 
        options={{
          headerShown: false, // ou customize o header como quiser
        }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return <Ionicons name="home-outline" size={size} color={color} />;
            } else if (route.name === 'Finanças') {
              return <Ionicons name="card" size={size} color={color} />;
            } else if (route.name === 'Conteúdos') {
              return <Ionicons name="newspaper-outline" size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* Usando o Stack Navigator dentro da aba Home */}
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Finanças" 
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
          name="Conteúdos" 
          component={ConteudoScreen} 
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}
/*export default function App() {
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
}*/
