import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/217898906_136454828602667_8607212279734631949_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=LTxhIi_zvFcAX9Hib4a&edm=ABfd0MgBAAAA&ccb=7-4&oh=a2fc5b8bea94bfa19676ed42a3002429&oe=6104CCA3&_nc_sid=7bff83',
    name: 'Htet Oo Zin',
  },
  {
    imageUri:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/95135413_593771394827500_2842642594691809280_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=52CW4BWXfLoAX9rSObM&edm=ABfd0MgBAAAA&ccb=7-4&oh=96ebc73655baa37167ccc723b761de7c&oe=610582DD&_nc_sid=7bff83',
    name: 'Nature',
  },
  {
    imageUri:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-19/s320x320/43818140_2116018831763532_3803033961098117120_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=_MFsjtHoulQAX-EbbUW&edm=ABfd0MgBAAAA&ccb=7-4&oh=5cf60aeb7c314b62a913b6a61674f680&oe=6105D272&_nc_sid=7bff83',
    name: 'Messi',
  },
  {
    imageUri:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/158017606_3876907199065003_4949203956071492517_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=cRLvhqEypr4AX8wVBCG&tn=8q_eDMXclPcV5GXk&edm=AGW0Xe4BAAAA&ccb=7-4&oh=98aac6ae4cc0068797a316464860ef07&oe=61047FEA&_nc_sid=acd11b',
    name: 'Smith Rowe',
  },
  {
    imageUri:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/158017606_3876907199065003_4949203956071492517_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=cRLvhqEypr4AX8wVBCG&tn=8q_eDMXclPcV5GXk&edm=AGW0Xe4BAAAA&ccb=7-4&oh=98aac6ae4cc0068797a316464860ef07&oe=61047FEA&_nc_sid=acd11b',
    name: 'Tester',
  },
  {
    imageUri:
      'https://instagram.frgn4-1.fna.fbcdn.net/v/t51.2885-15/s150x150/158017606_3876907199065003_4949203956071492517_n.jpg?_nc_ht=instagram.frgn4-1.fna.fbcdn.net&_nc_ohc=cRLvhqEypr4AX8wVBCG&tn=8q_eDMXclPcV5GXk&edm=AGW0Xe4BAAAA&ccb=7-4&oh=98aac6ae4cc0068797a316464860ef07&oe=61047FEA&_nc_sid=acd11b',
    name: 'Dragon',
  },
];

const Stories = () => (
  <FlatList
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
  />
);

export default Stories;
