import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },

  imageSection: {
    // backgroundColor: 'green',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },

  imageProduct: {
    width: 142,
    height: 142,
    borderRadius: 100,
  },

  title: {
    fontFamily: 'Poppins',
    position: 'relative',
    // backgroundColor: 'red',
    margin: 5,
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
    color: '#000000',
  },
  price: {
    position: 'relative',
    // backgroundColor: 'green',
    marginBottom: 5,
    fontWeight: '700',
    color: '#6A4029',
    fontSize: 22,
  },

  infoSection: {
    // backgroundColor: 'red',
    padding: 20,
  },

  infoTitle: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 17,
    color: '#000000',
  },

  infoPragraph: {
    fontFamily: 'Poppins',
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'justify',
  },

  decsSection: {
    // backgroundColor: 'yellow',
    padding: 20,
  },

  decTitle: {
    fontFamily: 'Poppins',
    fontWeight: '800',
    fontSize: 17,
    color: '#000000',
  },
  decPragraph: {
    fontFamily: 'Poppins',
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'justify',
  },

  // TODO: button style
  btnAddToChart: {
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
  btnAddToChartText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
});

export default styles;
