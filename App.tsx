// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import Profile from './src/screens/Profile';
import VideoChat from './src/screens/VideoChat';



const TextEncodingPolyfill = require('text-encoding');
const BigInt = require('big-integer');


const Stack = createNativeStackNavigator();


Object.assign(global, {
    TextEncoder: TextEncodingPolyfill.TextEncoder,
    TextDecoder: TextEncodingPolyfill.TextDecoder,
    BigInt: BigInt,
});



const App = () => {









  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="VideoChat" component={VideoChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;