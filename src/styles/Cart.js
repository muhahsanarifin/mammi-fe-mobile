import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  productsList: {
    // backgroundColor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
  },
  product: {
    backgroundColor: '#FFFFFF',
    width: 315,
    height: 102,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imgProduct: {
    width: 69,
    height: 69,
    borderRadius: 100,
  },

  detailProduct: {
    // backgroundColor: 'green',
    flex: 1,
    paddingHorizontal: 20,
  },

  titleProduct: {
    color: '#000000',
    fontSize: 17,
    fontWeight: '800',
    paddingVertical: 5,
  },

  subDetailProduct: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  addQuantityProduct: {
    flexDirection: 'row',
    backgroundColor: '#6A4029',
    width: 71,
    height: 20,
    justifyContent: 'center',
    borderRadius: 30,
  },
  minus: {
    // backgroundColor: 'green',
    color: '#FFFFFF',
    fontWeight: '800',
  },
  numeric: {
    // backgroundColor: 'green',
    marginHorizontal: 10,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  plus: {
    // backgroundColor: 'green',
    color: '#FFFFFF',
    fontWeight: '800',
  },

  // TODO: button style
  btnconfirmAndCheckout: {
    backgroundColor: '#6A4029',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    height: 65,
    borderRadius: 20,
    width: 300,
    alignSelf: 'center',
    marginTop: 'auto',
  },
  btnconfirmAndCheckoutText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
});

export default styles;
