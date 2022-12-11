import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    backgroundColor: '#F2F2F2',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  textSection: {
    // backgroundColor: 'red',
    flex: 1,
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
    position: 'relative',
    // backgroundColor: 'green',
    color: '#000000',
    textAlign: 'center',
    fontSize: 65,
    fontWeight: '800',
    fontFamily: 'Poppins',
  },
  decs: {
    position: 'relative',
    // backgroundColor: 'red',
    color: '#000000',
    textAlign: 'center',
    fontSize: 17,
    marginTop: 5,
    fontFamily: 'Poppins',
    width: 282,
    alignSelf: 'center',
  },

  image: {
    width: 350,
    height: 350,
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
  btnResendLink: {
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
  btnResendLinkText: {
    fontSize: 17,
    fontWeight: '800',
    fontFamily: 'Poppins',
    color: '#FFFFFF',
  },
});

export default styles;
