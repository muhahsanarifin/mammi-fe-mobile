import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// TODO: import screens
// import Splash from '../src/screens/Splash';
import Welcome from '../src/screens/Welcome';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import ForgotPassword from '../src/screens/ForgotPassword';
import Home from '../src/screens/Home';
import Orders from '../src/screens/Orders';
import ProductDetail from '../src/screens/ProductDetail';
import History from '../src/screens/History';
import Checkout from '../src/screens/Checkout';
import Cart from '../src/screens/Cart';
import Profile from '../src/screens/Profile';
import EditProfile from '../src/screens/EditProfile';
import Chat from '../src/screens/Chat';
import Payment from '../src/screens/Payment';
import Products from '../src/screens/Products';
// import Favorite from "./src/screens/Favorite";

const Stacks = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Splash" component={Splash}/> */}
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen
          name="Favorite"
          component={Favorite}
          options={{headerShown: false}}
        /> */}
    </Stack.Navigator>
  );
};

export default Stacks;
