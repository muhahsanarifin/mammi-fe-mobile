import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  footer: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
  },
  homeIcon: {
    width: 22,
    height: 22,
  },
  userIconSection: {
    marginLeft: 'auto',
  },

  userIcon: {
    width: 22,
    height: 22,
  },

  msgIconSection: {
    marginLeft: 40,
  },

  msgIcon: {
    width: 22,
    height: 22,
  },

  hmContainer: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
  },
  navigationContainer: {
    // backgroundColor: '#ecf0f1',
    // borderTopRightRadius: 30,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
