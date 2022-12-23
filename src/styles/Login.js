import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  imageSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Poopins',
    fontWeight: '900',
    width: 120,
    fontSize: 64,
    color: '#000000',
  },
  image: {
    width: 140,
    height: 321,
  },
  formSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
  },

  textInputFirst: {
    fontFamily: 'Poppins',
    width: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9D',
    fontSize: 14,
    color: '#9A9A9D',
    fontWeight: '600',
  },

  textInputSecond: {
    fontFamily: 'Poppins',
    marginTop: 10,
    marginBottom: 10,
    width: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9D',
    fontSize: 14,
    color: '#9A9A9D',
    fontWeight: '600',
    flex: 1,
  },

  textInputxPasswordToggle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textForgotPassword: {
    textDecorationLine: 'underline',
    color: '#895537',
    fontFamily: 'Poppins',
  },

  titleTextFormSection: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#9A9A9D',
  },

  btnLogin: {
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
  },
  btnLoginText: {
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  btnGoogle: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    height: 65,
    borderRadius: 20,
    width: 300,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#C7C7C7',
  },
  btnGooleText: {
    fontFamily: 'Poppins',
    fontSize: 17,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 5,
  },

  iconGoogle: {
    marginRight: 5,
    width: 28,
    height: 28,
  },
});

export default styles;
