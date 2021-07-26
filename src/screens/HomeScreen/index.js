import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../ProfilePicture';

const HomeScreen = () => {
  return (
    <View>
      <Text>Hello World</Text>
      <ProfilePicture
        uri={
          'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/217898906_136454828602667_8607212279734631949_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=LTxhIi_zvFcAX9Hib4a&edm=ABfd0MgBAAAA&ccb=7-4&oh=a2fc5b8bea94bfa19676ed42a3002429&oe=6104CCA3&_nc_sid=7bff83'
        }
      />
    </View>
  );
};

export default HomeScreen;
