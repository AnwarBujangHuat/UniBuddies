import * as React from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import { Navigator } from './App/Navigation/Navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Colors,
  DarkMode,
  LightMode
} from './App/Themes';
import store from './App/Redux/store';
import {
  Provider,
} from 'react-redux';
import BottomNavigation from './App/Navigation/BottomNavigation';
import { StatusBar } from 'react-native';


export default function App() {
  // EStyleSheet.build(LightMode)
  EStyleSheet.build(DarkMode)
  return (
      <NavigationContainer>
        <StatusBar barStyle={EStyleSheet.value(Colors.THEME)!=="Light"?"light-content":"dark-content"} />

        {/*<BottomNavigation/>*/}
        <Navigator/>
      </NavigationContainer>

  );
}
