import {View, Text, Image} from 'react-native';
import React from 'react';

import Header from '../components/Header/Header';
import Button from '../components/Button';
import styles from '../styles/Cart';

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        sourceBackIcon={require('../assets/icons/chevron-left.png')}
        headerTitle={`Cart`}
        onPressToBack={() => navigation.goBack()}
      />
      <View style={styles.productsList}>
        <View style={styles.product}>
          <Image
            source={require('../assets/images/image-12.png')}
            style={styles.imgProduct}
          />
          <View style={styles.detailProduct}>
            <Text style={styles.titleProduct}>{`Hazelnut Latte`}</Text>
            <View style={styles.subDetailProduct}>
              <Text>{`IDR 25.000`}</Text>
              <View style={styles.addQuantityProduct}>
                <Text style={styles.minus}>-</Text>
                <Text style={styles.numeric}>{`1`}</Text>
                <Text style={styles.plus}>+</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Button
        onPress={() => navigation.push('Checkout')}
        styleBtn={styles.btnconfirmAndCheckout}
        styleText={styles.btnconfirmAndCheckoutText}
        titleText={`Confirm and Checkout`}
      />
    </View>
  );
};

export default Cart;
