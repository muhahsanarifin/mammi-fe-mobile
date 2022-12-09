import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  textSection: {
    // backgroundColor: 'red',
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageSection: {
    // backgroundColor: 'yellow',
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  title: {
    // backgroundColor: 'green',
    color: '#000000',
    textAlign: 'center',
    fontSize: 65,
    fontWeight: '800',
    fontFamily: 'Poppins',
  },
  decs: {
    // backgroundColor: 'green',
    color: '#000000',
    textAlign: 'center',
    fontSize: 17,
    marginTop: 5,
    fontFamily: 'Poppins',
    width: 282,
    alignSelf: 'center',
  },

  image: {
    width: 500,
    height: 500,
    position: 'absolute',
    alignSelf: 'center',
  },

  btnSection: {
    // backgroundColor: 'purple',
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btnRegister: {
    backgroundColor: '#6A4029',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    height: 65,
    borderRadius: 20,
    width: 300,
    alignSelf: 'center',
  },
  btnRegisterText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
  btnLogin: {
    backgroundColor: '#FFBA33',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    borderRadius: 20,
    width: 300,
    alignSelf: 'center',
    marginTop: 10,
  },
  btnLoginText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#000000',
  },
});

export default styles;
