import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },

  // TODO: Header
  header: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuIcon: {
    width: 18,
    height: 18,
  },
  cartIcon: {
    width: 22,
    height: 22,
    marginLeft: 'auto',
  },
  titleTextSection: {
    // backgroundColor: 'green',
    marginTop: 20,
    marginBottom: 20,
  },

  titleText: {
    fontFamily: 'Poppins',
    // backgroundColor: 'red',
    fontSize: 32,
    width: 260,
    fontWeight: '900',
    color: '#000000',
  },

  // TODO: Input text component
  inputSection: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C7C7C7',
    borderRadius: 30,
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
  textInput: {
    fontFamily: 'Poppins',
    position: 'relative',
    width: 'auto',
    fontSize: 17,
    color: '#000000',
    fontWeight: '900',
    paddingLeft: 12,
  },

  // TODO: Products
  productSection: {
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
  },
  listProducts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  listProduct: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    fontSize: 17,
    padding: 5,
    color: '#9A9A9D',
  },

  // TODO: Product section
  products: {
    // backgroundColor: 'red',
    padding: 25,
  },

  seeMore: {
    padding: 5,
    // backgroundColor: 'yellow',
    textAlign: 'right',
    marginBottom: 50,
    color: '#6A4029',
    fontWeight: '600',
  },

  product: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 220,
    elevation: 20,
    shadowColor: '#52006A',
  },

  image: {
    position: 'absolute',
    // backgroundColor: 'green',
    top: -30,
    width: 168,
    height: 189,
    borderRadius: 20,
    position: 'relative',
  },
  title: {
    position: 'relative',
    // backgroundColor: 'red',
    top: -20,
    padding: 5,
    fontWeight: '800',
    width: 125,
    fontSize: 22,
    textAlign: 'center',
    color: '#000000',
  },
  price: {
    position: 'relative',
    // backgroundColor: 'green',
    // marginBottom: 5,
    top: -10,
    padding: 10,
    fontWeight: '700',
    color: '#6A4029',
  },

  // TODO research

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

  profile: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#6A4029',
    height: 288,
    // borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  imageProfile: {
    width: 142,
    height: 142,
    borderRadius: 100,
  },
  name: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
    margin: 10,
  },
  email: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  screenList: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    // backgroundColor: 'green',
  },

  list: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
  },
  signOutList: {
    marginTop: 'auto',
  },
  menuIconList: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  nameList: {
    marginLeft: 10,
    color: '#6A4029',
    fontWeight: '600',
    fontSize: 17,
  },
});

export default styles;
