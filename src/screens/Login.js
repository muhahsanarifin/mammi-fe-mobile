import {View, Text, Image, TextInput} from 'react-native';
import Form from 'react-native-form';
import React from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import styles from '../styles/Login';
import Button from '../components/Button';

const Login = () => {
  const navigation = useNavigation();

  // TODO: Sample
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const tryToHandleLogin = () => {
  //   const data = {
  //     email,
  //     password
  //   }
  //   console.log(data);
  // }

  // TODO: Pass to Home screen to build styling.
  const tryToHandleLogin = () => {
    navigation.push('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Text style={styles.titleText}>Log in</Text>
        <Image
          source={require('../assets/images/lady-having-coffee.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.formSection}>
        <Form style={styles.form}>
          <TextInput
            name="email"
            value={email}
            placeholder="Enter your email adress"
            style={styles.textInput}
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            name="password"
            value={password}
            placeholder="Enter your password"
            style={styles.textInput}
            onChangeText={value => setPassword(value)}
          />

          <Text
            style={styles.textForgotPassword}
            onPress={() => navigation.push('ForgotPassword')}>
            Forgot Password?
          </Text>

          <Button
            // onPress={handleLogin}
            onPress={tryToHandleLogin}
            styleBtn={styles.btnLogin}
            styleText={styles.btnLoginText}
            titleText={`Login`}
          />
          <Text style={styles.titleTextFormSection}>or login in with</Text>
          <Button
            // onPress={handleLogin}
            sourceImg={require('../assets/icons/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png')}
            styleImg={styles.iconGoogle}
            styleBtn={styles.btnGoogle}
            styleText={styles.btnGooleText}
            titleText={`Login With Google`}
          />
        </Form>
      </View>
    </View>
  );
};

export default Login;
