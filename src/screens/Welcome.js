import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/Welcome';

// TODO: components
import Button from "../components/Button";

const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.decs}>
          Get a cup of coffee for free only for new user
        </Text>
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require('../assets/images/girl-checking-phone-during-free-time.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.btnSection}>
        <Button
          onPress={() => navigation.push('Register')}
          styleBtn={styles.btnRegister}
          styleText={styles.btnRegisterText}
          titleText={`Create New Account`}
        />
        <Button
          onPress={() => navigation.push('Login')}
          styleBtn={styles.btnLogin}
          styleText={styles.btnLoginText}
          titleText={`Login`}
        />
        {/* <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => navigation.push('Register')}>
          <Text style={styles.btnRegisterText}>Create New Account</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.push('Login')}>
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Welcome;
