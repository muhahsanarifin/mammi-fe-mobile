import {TouchableOpacity, View, Text} from 'react-native';
import React from 'react';
// import styles from '../styles/Button';

const Button = ({onPress, styleBtn, styleText, titleText}) => {
  return (
    <TouchableOpacity style={styleBtn} onPress={onPress}>
      <Text style={styleText}>{titleText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
