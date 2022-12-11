import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from '../styles/ProductDetail';

import Header from '../components/Header/Header';
import Button from '../components/Button';

const ProductDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        sourceBackIcon={require('../assets/icons/chevron-left.png')}
        sourceCartIcon={require('../assets/icons/cart.png')}
        onPressToBack={() => navigation.goBack()}
        onPressToCart={() => navigation.navigate('Cart')}
      />
      <View style={styles.imageSection}>
        <Image
          source={require('../assets/images/image-12.png')}
          style={styles.imageProduct}
        />
        <Text style={styles.title}>{'Hazelnut Latte'}</Text>
        <Text style={styles.price}>{'IDR 25.000'}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Delivery Info</Text>
        <Text style={styles.infoPragraph}>
          Delivered only on monday until friday from 1 pm to 7 pm
        </Text>
      </View>
      <View style={styles.decsSection}>
        <Text style={styles.decTitle}>Description</Text>
        <Text style={styles.decPragraph}>
          Cold brewing is a method of brewing that combines ground coffee and
          cool water and uses time instead of heat to extract the flavor. It is
          brewed in small batches and steeped for as long as 48 hours.
        </Text>
      </View>
      <Button
        onPress={()=> navigation.push('Cart')}
        styleBtn={styles.btnAddToChart}
        styleText={styles.btnAddToChartText}
        titleText={`Add to cart`}
      />
    </View>
  );
};

export default ProductDetail;
