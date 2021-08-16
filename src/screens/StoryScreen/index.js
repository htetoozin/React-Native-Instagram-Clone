import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import storiesData from '../../data/stories';

import styles from './styles.js';

const StoryScreen = () => {
  const [userStories, setUserStoreis] = useState('');
  const [activeStoryIndex, setActiveStoryIndex] = useState('');
  const [activeStory, setActiveStory] = useState('');

  const route = useRoute();

  useEffect(() => {
    const userId = route.params.userId;

    const userStories = storiesData.find(
      storyData => storyData.user.id == userId,
    );
    setUserStoreis(userStories);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {
    if (!userStories) {
      return;
    }

    if (activeStoryIndex < 0) {
      setActiveStoryIndex(0);
      return;
    }

    if (activeStoryIndex >= userStories.stories.length) {
      setActiveStoryIndex(userStories.stories.length - 1);
      return;
    }

    if (userStories && userStories.stories.length > activeStoryIndex - 1) {
      setActiveStory(userStories.stories[activeStoryIndex]);
    }
  }, [activeStoryIndex]);

  const handlePrevStory = () => {
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handleNextStory = () => {
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePress = evt => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    console.log('screen width ', x, screenWidth / 2);

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
