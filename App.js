import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
