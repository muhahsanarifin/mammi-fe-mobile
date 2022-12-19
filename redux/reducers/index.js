import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './auth';
import productReducer from './products';
import userReducer from './user';
import transactionReducer from './transactions';
import profileReducer from './profile';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  user: userReducer,
  transaction: transactionReducer,
  profile: profileReducer,
});
