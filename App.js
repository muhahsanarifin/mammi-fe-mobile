import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacks from './routes/stacks';

const App = () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};

export default App;
