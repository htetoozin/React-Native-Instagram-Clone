import React from 'react';
import {FlatList} from 'react-native';
import Story from '../UserStoryPreview';
import StoriesData from '../../data/stories';

import styles from './styles';

const Stories = () => (
  <FlatList
    data={StoriesData}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    renderItem={({item}) => <Story story={item} />}
  />
);

export default Stories;
