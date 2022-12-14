import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

const persistConfig = {
  key: 'Mammi',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: true, serializableCheck: false}).concat(
      logger,
    ),
});

export const persistedStore = persistStore(store);
export default store;
