import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import Form from 'react-native-form';

import styles from '../styles/ForgotPassword';
import Button from '../components/Button';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.title}>Don't Worry!</Text>
        <Text style={styles.decs}>
          We’ve just sent a link to your email to request a new password
        </Text>
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require('../assets/images/boy-waiting-with-cat.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.formSection}>
        <Form style={styles.form}>
          <TextInput
            placeholder="Enter your email adress"
            style={styles.textInput}
          />
          <Button
            // onPress={}
            styleBtn={styles.btnResendLink}
            styleText={styles.btnResendLinkText}
            titleText={`Create Account`}
          />
        </Form>
      </View>
    </View>
  );
};

export default ForgotPassword;
