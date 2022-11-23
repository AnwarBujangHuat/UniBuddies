import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import { Navigator } from './App/Navigation/Navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import { DarkMode } from './App/Themes';


export default function App() {
  EStyleSheet.build(DarkMode)
  return (
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
  );
}
