import React from 'react';
import {View, FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../Stories';

const data = [
  {
    id: 1,
    user: {
      imageUri:
        'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/158017606_3876907199065003_4949203956071492517_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=cRLvhqEypr4AX8wVBCG&tn=8q_eDMXclPcV5GXk&edm=AGW0Xe4BAAAA&ccb=7-4&oh=98aac6ae4cc0068797a316464860ef07&oe=61047FEA&_nc_sid=acd11b',
      name: 'Smith Rowe',
    },
    image:
      'https://premierleaguenewsnow.com/wp-content/uploads/2021/01/Emile-Smith-Rowe-Arsenal.jpg',
    caption: 'Arsenal #instagram',
    likeCount: 10,
    postedAt: '10 minutes ago',
  },
  {
    id: 2,
    user: {
      imageUri:
        'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/233896417_416051286512215_5443345452492483496_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=KUGkrqMMh4wAX8HBXad&edm=AIQHJ4wBAAAA&ccb=7-4&oh=0c5dc384709805a5a257f0d6345bc31c&oe=6117B8C5&_nc_sid=7b02f1',
      name: 'depths.of.earth',
    },
    image:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/233896417_416051286512215_5443345452492483496_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=KUGkrqMMh4wAX8HBXad&edm=AIQHJ4wBAAAA&ccb=7-4&oh=0c5dc384709805a5a257f0d6345bc31c&oe=6117B8C5&_nc_sid=7b02f1',
    caption: 'depths.of.earth',
    likeCount: 11,
    postedAt: '9 minutes ago',
  },
  {
    id: 3,
    user: {
      imageUri:
        'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/233715088_1830082783837568_1157372712119328255_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=r1JNYLxnBUkAX-a2S60&edm=APU89FABAAAA&ccb=7-4&oh=0f8e361c70cbc9a8b41b8b481827bc4c&oe=6117D137&_nc_sid=86f79a',
      name: 'NASA',
    },
    image:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/233715088_1830082783837568_1157372712119328255_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=r1JNYLxnBUkAX-a2S60&edm=APU89FABAAAA&ccb=7-4&oh=0f8e361c70cbc9a8b41b8b481827bc4c&oe=6117D137&_nc_sid=86f79a',
    caption: 'NASA',
    likeCount: 19,
    postedAt: '8 minutes ago',
  },
  {
    id: 4,
    user: {
      imageUri:
        'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/234754743_556297202226510_8592807756388247559_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3RzehHNbb74AX9mrpTJ&edm=APU89FABAAAA&ccb=7-4&oh=ab516b133b80bcbaad1e2055d1586028&oe=611800EC&_nc_sid=86f79a',
      name: 'Nature',
    },
    image:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/234754743_556297202226510_8592807756388247559_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=3RzehHNbb74AX9mrpTJ&edm=APU89FABAAAA&ccb=7-4&oh=ab516b133b80bcbaad1e2055d1586028&oe=611800EC&_nc_sid=86f79a',
    caption: 'Nature',
    likeCount: 15,
    postedAt: '7 minutes ago',
  },
  {
    id: 5,
    user: {
      imageUri:
        'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/236058537_922442568698561_6751532040756078678_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=HuULRS81ymQAX--ipJm&edm=AIQHJ4wBAAAA&ccb=7-4&oh=bbb04e3d268b7e7566e596a656636caf&oe=61178466&_nc_sid=7b02f1',
      name: 'Cute Animal',
    },
    image:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/236058537_922442568698561_6751532040756078678_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=HuULRS81ymQAX--ipJm&edm=AIQHJ4wBAAAA&ccb=7-4&oh=bbb04e3d268b7e7566e596a656636caf&oe=61178466&_nc_sid=7b02f1',
    caption: 'Cute Animal One',
    likeCount: 20,
    postedAt: '5 minutes ago',
  },
];

const Feed = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <Post post={item} />}
        ListHeaderComponent={Stories}
      />
    </View>
  );
};

export default Feed;
