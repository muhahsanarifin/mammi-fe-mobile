import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import Form from 'react-native-form';
import React, {useState} from 'react';
import styles from '../styles/Register';
import Button from '../components/Button';
import PasswordToggle from '../components/PasswordToggle';
import {useDispatch} from 'react-redux';
import usersAction from '../../redux/actions/users';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  const body = {
    email,
    password,
    phone_number,
  };

  const registSuccess = success => {
    ToastAndroid.showWithGravityAndOffset(
      `${success}`,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      25,
    );

    navigation.replace('Login');
  };

  const registFailed = error => {
    ToastAndroid.showWithGravityAndOffset(
      `${error}`,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      25,
    );
  };

  const handleRegister = () => {
    dispatch(usersAction.registerThunk(body, registSuccess, registFailed));

    setEmail('');
    setPassword('');
    setPhoneNumber('');
  };

  // TODO: Handle show/hide password
  const handlePasswodToggle = () => {
    setShow(!show);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{flex:1}}>
        <View style={styles.imageSection}>
          <Image
            source={require('../assets/images/girl-chilling-exploring-on-the-phone.png')}
            style={styles.image}
          />
          <Text style={styles.titleText}>Sign Up</Text>
        </View>
        <View style={styles.formSection}>
          <Form style={styles.form}>
            <TextInput
              value={email}
              placeholder="Enter your email adress"
              style={styles.textInputFirst}
              onChangeText={value => setEmail(value)}
            />
            <View style={styles.textInputxPasswordToggle}>
              <TextInput
                value={password}
                placeholder="Enter your password"
                style={styles.textInputSecond}
                secureTextEntry={show}
                onChangeText={value => setPassword(value)}
              />
              <PasswordToggle onPress={handlePasswodToggle} show={show} />
            </View>
            <TextInput
              value={phone_number}
              placeholder="Enter your phone number"
              style={styles.textInputFirst}
              onChangeText={value => setPhoneNumber(value)}
            />
            <Button
              onPress={handleRegister}
              styleBtn={styles.btnRegister}
              styleText={styles.btnRegisterText}
              titleText={`Create Account`}
            />
          </Form>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
