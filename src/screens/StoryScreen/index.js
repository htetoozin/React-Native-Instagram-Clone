import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import storiesData from '../../data/stories';

import styles from './styles.js';
import ProfilePicture from '../../components/ProfilePicture';

const StoryScreen = () => {
  const [userStories, setUserStoreis] = useState('');
  const [activeStoryIndex, setActiveStoryIndex] = useState('');
  const [activeStory, setActiveStory] = useState('');

  const route = useRoute();
  const navigation = useNavigation();

  const userId = route.params.userId;
  console.log('userId ', userId);

  useEffect(() => {
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

  const navigateToPrevUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) - 1).toString()});
  };

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: (parseInt(userId) + 1).toString()});
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPrevUser();
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
    }
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
          style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.username}>{userStories.user.name}</Text>
            <Text style={styles.postedAt}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#fff'} />
            </View>

            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send Message"
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons name="paper-plane-outline" size={35} color={'#fff'} />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
