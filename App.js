import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './App/Navigation/Navigation';
import { StatusBar } from 'react-native';
import { Appearance } from 'react-native';
const colorScheme = Appearance.getColorScheme();
export default function App () {
  return (
    <NavigationContainer>
      <StatusBar barStyle={colorScheme !== 'Light' ? 'light-content' : 'dark-content'} />
      <Navigator />
    </NavigationContainer>

  );
}
