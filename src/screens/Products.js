import {View, Text, Image} from 'react-native';
import React from 'react';

import Header from '../components/Header/Header';
import styles from '../styles/Products';

const Products = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style = {styles.headerSection}>
        <Header
          sourceBackIcon={require('../assets/icons/chevron-left.png')}
          headerTitle={`Favorite Products`}
          onPressToBack={() => navigation.goBack()}
        />
      </View>
      <View style={styles.mainContent}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{`Choose your favorite`}</Text>
        </View>
        <View style={styles.productsList}>
          <View style={styles.product}>
            <Image
              source={require('../assets/images/image-12.png')}
              style={styles.imageProduct}
            />
            <Text style={styles.titleProduct}>{`Hazelnut Latte`}</Text>
            <Text style={styles.price}>{`IDR 25.000`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Products;
