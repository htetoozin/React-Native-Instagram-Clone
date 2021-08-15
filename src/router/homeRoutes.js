import React from 'react';
import {Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../assets/images/logo.png';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
        headerTitle: () => (
          <Image
            source={logo}
            resizeMode="contain"
            style={{
              width: 135,
              height: 50,
            }}
          />
        ),
        headerRight: () => (
          <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
        ),
      }}
    />
    <Stack.Screen name="Story" component={StoryScreen} />
  </Stack.Navigator>
);

export default HomeRoutes;
