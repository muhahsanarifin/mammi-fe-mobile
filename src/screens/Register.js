import {View, Text, Image, TextInput} from 'react-native';
import Form from 'react-native-form';
import React from 'react';

import styles from '../styles/Register';

import Button from '../components/Button';

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Text style={styles.titleText}>
          Sign Up
        </Text>
        <Image
          source={require('../assets/images/girl-chilling-exploring-on-the-phone.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.formSection}>
        <Form style={styles.form}>
          <TextInput
            placeholder="Enter your email adress"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter your password"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter your phone number"
            style={styles.textInput}
          />
          <Button
            onPress={() => navigation.push('Register')}
            styleBtn={styles.btnRegister}
            styleText={styles.btnRegisterText}
            titleText={`Create Account`}
          />
        </Form>
      </View>
    </View>
  );
};

export default Register;
