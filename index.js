import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistedStore} from './redux/store';
import React from 'react';

const AppWR = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWR);
