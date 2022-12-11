import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  imageSection: {
    // backgroundColor: 'yellow',
    display: 'flex',
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    // backgroundColor: 'blue',
    fontFamily: 'Poopins',
    position: 'absolute',
    fontWeight: '900',
    fontSize: 64,
    width: 135,
    right: 0,
    top: 120,
    color: '#000000',
  },
  image: {
    // backgroundColor: 'green',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  formSection: {
    // backgroundColor: 'red',
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  form: {
    // backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    width: '85%',
  },

  textInput: {
    fontFamily: 'Poppins',
    position: 'relative',
    marginTop: 10,
    marginBottom: 10,
    width: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9D',
    fontSize: 17,
    color: '#9A9A9D',
    fontWeight: '600',
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
    position: 'relative',
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
    position: 'relative',
    marginRight: 5,
    width: 28,
    height: 28,
  },
});

export default styles;
