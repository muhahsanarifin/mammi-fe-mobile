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
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/Login';
import Button from '../components/Button';
import PasswordToggle from '../components/PasswordToggle';
import {useDispatch} from 'react-redux';
import authAction from '../../redux/actions/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const body = {
    email,
    password,
  };

  const loginSuccess = success => {
    ToastAndroid.showWithGravityAndOffset(
      `${success}`,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      25,
    );

    navigation.replace('Home');
  };

  const loginFailed = error => {
    ToastAndroid.showWithGravityAndOffset(
      `${error}`,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      25,
    );
  };

  const handleLogin = () => {
    dispatch(authAction.loginThunk(body, loginSuccess, loginFailed));
    setEmail('');
    setPassword('');
  };

  // TODO: Handle show/hide password
  const handlePasswodToggle = () => {
    setShow(!show);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.imageSection}>
          <Image
            source={require('../assets/images/lady-having-coffee.png')}
            style={styles.image}
          />
          <Text style={styles.titleText}>Log in</Text>
        </View>
        <View style={styles.formSection}>
          <Form style={styles.form}>
            <TextInput
              value={email}
              placeholder="Enter your email address"
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

            <Text
              style={styles.textForgotPassword}
              onPress={() => navigation.push('ForgotPassword')}>
              Forgot Password?
            </Text>

            <Button
              onPress={handleLogin}
              styleBtn={styles.btnLogin}
              styleText={styles.btnLoginText}
              titleText={`Login`}
            />
            <Text style={styles.titleTextFormSection}>or login in with</Text>
            <Button
              // onPress={handleLoginViaGoogle}
              sourceImg={require('../assets/icons/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png')}
              styleImg={styles.iconGoogle}
              styleBtn={styles.btnGoogle}
              styleText={styles.btnGooleText}
              titleText={`Login With Google`}
            />
          </Form>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
