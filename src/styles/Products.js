import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    // padding: 20,
  },
  headerSection: {
    padding: 20,
  },
  mainContent: {
    backgroundColor: '#F9F9F9',
    flexDirection: 'column',
    flex: 1,
    padding: 20,
    marginTop: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  titleSection: {
    // backgroundColor: 'green',
    flex: 0.1,
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
  },
  productsList: {
    // backgroundColor: 'red',
    flex: 1,
    paddingVertical: 20,
    marginVertical: 20,
  },

  product: {
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    // height: 212,
    width: 156,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    // boxShadow: '0px 30px 60px rgba(57, 57, 57, 0.1)',
    elevation: 20,
    shadowColor: '#52006A',
  },

  titleProduct: {
    // backgroundColor: 'red',
    top: -20,
    position: 'relative',
    fontWeight: '900',
    fontSize: 22,
    width: 117,
    textAlign: 'center',
    marginVertical: 5,
    color: '#000000',
  },

  price: {
    // backgroundColor: 'green',
    position: 'relative',
    top: -20,
    marginVertical: 5,
    width: 135,
    textAlign: 'center',
    paddingVertical: 5,
    color: '#6A4029',
    fontWeight: '900',
    fontSize: 17,
  },

  imageProduct: {
    position: 'relative',
    top: -35,
    width: 128,
    height: 128,
    borderRadius: 100,
  },
});

export default styles;
