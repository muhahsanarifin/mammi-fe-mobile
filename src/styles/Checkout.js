import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },

  mainContet: {
    flex: 1,
    // backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  deliverySection: {
    fontSize: 34,
    fontWeight: '900',
    paddingVertical: 10,
    color: '#000000',
  },

  titleSection: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  addressTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  btnChange: {
    color: '#6A4029',
  },

  addressSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 30,
  },

  street: {
    // backgroundColor: 'blue',
    fontSize: 17,
    fontWeight: '400',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  streetDetail: {
    // backgroundColor: 'red',
    fontSize: 17,
    fontWeight: '400',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  phoneNumber: {
    // backgroundColor: 'blue',
    fontSize: 17,
    fontWeight: '400',
  },

  deliveryTitle: {
    fontSize: 20,
    fontWeight: '700',
  },

  deliveryMethodsSection: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 30,
  },

  radioGrupStyle: {
    backgroundColor: 'red',
  },

  deliveryItem: {
    fontSize: 18,
    marginVertical: 10,
    color: '#000000',
  },

  totalSection: {
    fontFamily: 'Poppins',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalTitle: {
    fontSize: 20,
    color: '#000000',
  },
  price: {
    fontWeight: '700',
    fontSize: 22,
    color: '#000000',
  },

  // TODO: button style
  btnProceedToPayment: {
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
  btnProceedToPaymentText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
});

export default styles;
