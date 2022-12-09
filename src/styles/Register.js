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
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
  },
  titleText: {
    position: 'absolute',
    fontWeight: '900',
    fontSize: 64,
    width: 146,
    right: 40,
    top: 40,
    color: '#000000',
  },
  image: {
    width: 400,
    height: 400,
    position: 'absolute',
    alignSelf: 'center',
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
    position: 'relative',
    fontFamily: 'Poppins',
    marginTop: 10,
    marginBottom: 10,
    width: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#9A9A9D',
    fontSize: 17,
    color: '#9A9A9D',
    fontWeight: '600',
  },
  btnRegister: {
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
  btnRegisterText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
});

export default styles;
