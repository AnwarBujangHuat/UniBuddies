/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { persistStore } from 'redux-persist';
import * as React from 'react';
import store from './App/Redux/store';
import {
  Provider,
} from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
const persist = persistStore(store);


const app = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
