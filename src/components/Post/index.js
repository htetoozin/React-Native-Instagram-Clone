import React from 'react';
import {View} from 'react-native';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUrl={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer
        likesCount={post.likeCount}
        caption={post.caption}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
