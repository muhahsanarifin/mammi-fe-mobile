import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerSection: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  backIconSection: {
    // backgroundColor: 'yellow',
    padding: 1,
  },

  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#000000',
  },
  cartIconSection: {
    // backgroundColor: 'red',
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
});

export default styles;
