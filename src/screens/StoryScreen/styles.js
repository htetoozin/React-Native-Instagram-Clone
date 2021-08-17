import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  postedAt: {
    marginLeft: 10,
    color: '#808080',
    fontWeight: '700',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 10,
  },
  textInputContainer: {
    flex: 1,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    height: '100%',
    color: '#fff',
    fontSize: 16,
  },
  cameraButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
  },
  messageButton: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
