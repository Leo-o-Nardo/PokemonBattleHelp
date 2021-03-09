import 'react-native-gesture-handler';

import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import PokedexScreen from './pages/PokedexScreen';
import BattleScreen from './pages/BattleScreen';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function PokedexStack() {
  return (
    <Stack.Navigator
      initialRouteName="Pokedex" 
      screenOptions={{
        headerStyle: { backgroundColor: '#f44242' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: 'Pokedex Page' }}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#f44242' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page' }}
      />
    </Stack.Navigator>
  );
}

function BattleStack() {
  return (
    <Stack.Navigator
      initialRouteName="Battle"
      screenOptions={{
        headerStyle: { backgroundColor: '#f44242' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Battle"
        component={BattleScreen}
        options={{ title: 'Battle Page' }}
      />
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#f44242',
          activeBackgroundColor: "#f2f6f7",
        }}>
        <BottomTab.Screen
          name="PokedexStack"
          component={PokedexStack}
          options={{
            tabBarLabel: 'Pokedex',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ width: size+20, height: size+20 }}
                source={require("./assets/ico_pokedex.png")}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ width: size+50, height: size+50 }}
                source={require("./assets/pokemon_center.png")}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="BattleStack"
          component={BattleStack}
          options={{
            tabBarLabel: 'Battle',
            tabBarIcon: ({ color, size }) => (
              <Image
                style={{ width: size+10, height: size+10 }}
                source={require("./assets/battle_ico.png")}
              />
            ),
          }}
        />

      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;
