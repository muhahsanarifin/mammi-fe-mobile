import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import styles from '../../styles/Header';

const Header = ({headerTitle, onPressToBack, onPressToCart}) => {
  return (
    <View style={styles.headerSection}>
      <TouchableOpacity style={styles.backIconSection} onPress={onPressToBack}>
        <Image
          source={require('../../assets/icons/chevron-left.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{headerTitle}</Text>
      <TouchableOpacity
        style={styles.cartIconSection}
        onPress={onPressToCart}>
        <Image
          source={require('../../assets/icons/cart.png')}
          style={styles.cartIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
