import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from '../../styles/Footer';

const Footer = ({onPressToProfile, onPressToChat}) => {
  return (
    <View style={styles.footer}>
      <Image
        source={require('../../assets/icons/heroicons-solid_home.png')}
        style={styles.homeIcon}
      />
      <TouchableOpacity
        onPress={onPressToProfile}
        style={styles.userIconSection}>
        <Image
          source={require('../../assets/icons/user.png')}
          style={styles.userIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressToChat} style={styles.msgIconSection}>
        <Image
          source={require('../../assets/icons/chat-bubble-with-lines-1.png')}
          style={styles.msgIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
