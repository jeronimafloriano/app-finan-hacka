import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { Image } from 'react-native';
import FinanceScreen from './screens/FinanceScreen';
import ConfirmDataScreen from './screens/ConfirmDataScreen';
import ConteudoScreen from './screens/ConteudoScreen';
import HistoryScreen from './screens/HistoryScreen'; 
import InitScreen from './screens/InitScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import FinancialPlanScreen from './screens/FinancialPlanScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

function FinanceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="FinanceScreen" 
        component={FinanceScreen} 
        options={{headerShown: false}} 
      />
      <Stack.Screen 
        name="FinancialPlanScreen"
        component={FinancialPlanScreen} 
        options={{ 
          headerTitle: "Plano Financeiro",
          headerTitleAlign: 'center'
        }}
        />
      <Stack.Screen 
        name="InitScreen" 
        component={InitScreen} 
        options={{headerShown: false}} 
      />
      <Stack.Screen 
        name="ConfirmDataScreen" 
        component={ConfirmDataScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="HistoryScreen" 
        component={HistoryScreen} 
        options={{ 
          headerTitle: "Histórico de Transações",
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={WelcomeScreen} 
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
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
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
        <Tab.Screen 
          name="Home" 
          component={HomeStack} 
          options={{ headerShown: false }} 
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              // Evitar comportamento padrão de empilhamento.
              e.preventDefault();
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
            },
          })}
        />
        <Tab.Screen 
          name="Finanças" 
          component={FinanceStack}
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