import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  imageSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: '900',
    fontSize: 42,
    width: 146,
    color: '#000000',
    position: 'absolute',
    top: 50,
    right: 20,
  },
  image: {
    width: 301,
    height: 286,
    alignSelf: 'center',
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
    marginTop: 10,
    marginBottom: 10,
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
