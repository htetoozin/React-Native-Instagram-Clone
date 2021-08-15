import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import ProfilePicture from '../ProfilePicture';

const UserStoryPreview = ({imageUri, name}) => {
  const onPress = () => {
    console.log(`${name} story pressed`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default UserStoryPreview;
