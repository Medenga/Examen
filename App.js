import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import Connect from './comp/connect';
import Home from './comp/home';
import Game from './comp/game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connection" component={Connect} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


