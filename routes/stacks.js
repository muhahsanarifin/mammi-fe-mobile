import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// TODO: import screens
import Welcome from '../src/screens/Welcome';
import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import Home from '../src/screens/Home';
import ForgotPassword from '../src/screens/Home';

const Stacks = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default Stacks;
