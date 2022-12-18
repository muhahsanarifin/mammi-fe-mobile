import {View, Pressable, Text, StyleSheet} from 'react-native';
import React from 'react';

const PasswordToggle = ({onPress, show}) => {
  return (
    <View style={styles.pgSection}>
      <Pressable onPress={onPress}>
        {show ? (
          <Text style={styles.text}>Show</Text>
        ) : (
          <Text style={styles.text}>Hide</Text>
        )}
      </Pressable>
    </View>
  );
};

// TODO: Internal CSS
const styles = StyleSheet.create({
  pgSection: {
    position: 'absolute',
    right: 0,
  },
  text: {
    fontWeight: '800',
    padding: 1,
  },
});

export default PasswordToggle;
