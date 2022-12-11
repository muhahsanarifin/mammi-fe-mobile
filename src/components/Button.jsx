import {TouchableOpacity, View, Text, Image} from 'react-native';
import React from 'react';
// import styles from '../styles/Button';

const Button = ({
  onPress,
  styleBtn,
  styleText,
  titleText,
  sourceImg,
  styleImg,
}) => {
  return (
    <TouchableOpacity style={styleBtn} onPress={onPress}>
      <Image source={sourceImg} style={styleImg} />
      <Text style={styleText}>{titleText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
