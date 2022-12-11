import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import styles from '../../styles/Header';

const Header = ({sourceBackIcon,sourceCartIcon,headerTitle, onPressToBack, onPressToCart}) => {
  return (
    <View style={styles.headerSection}>
      <TouchableOpacity style={styles.backIconSection} onPress={onPressToBack}>
        <Image
          source={sourceBackIcon}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{headerTitle}</Text>
      <TouchableOpacity
        style={styles.cartIconSection}
        onPress={onPressToCart}>
        <Image
          source={sourceCartIcon}
          style={styles.cartIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
