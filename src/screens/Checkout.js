import {View, Text} from 'react-native';
import React from 'react';

import Header from '../components/Header/Header';
import Button from '../components/Button';
import styles from '../styles/Checkout';
import {TextInput} from 'react-native-gesture-handler';

const Checkout = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        sourceBackIcon={require('../assets/icons/chevron-left.png')}
        headerTitle={`Checkout`}
        onPressToBack={() => navigation.goBack()}
      />
      <Text style={styles.deliverySection}>Delivery</Text>
      <View style={styles.mainContet}>
        <View style={styles.titleSection}>
          <Text style={styles.addressTitle}>Address details</Text>
          <Text style={styles.btnChange}>change</Text>
        </View>
        <View style={styles.addressSection}>
          <TextInput
            placeholder=""
            value={`Iskandar Street`}
            style={styles.street}
          />
          <TextInput
            value={`Km 5 refinery road oppsite republic road, effurun, Jakarta`}
            style={styles.streetDetail}
            // placeholder=""
          />
          <TextInput
            // placeholder=""
            value={`+62 81348287878`}
            style={styles.phoneNumber}
          />
        </View>
        <Text style={styles.deliveryTitle}>Delivery methods</Text>
        <View style={styles.deliveryMethodsSection}>
          <Text style={styles.deliveryItem}>Door delivery</Text>
          <Text style={styles.deliveryItem}>Pick up at store</Text>
          <Text style={styles.deliveryItem}>Dine in</Text>
        </View>
        <View style={styles.totalSection}>
          <Text style={styles.totalTitle}>Total</Text>
          <Text style={styles.price}>{`IDR. 123.000`}</Text>
        </View>
      </View>
      <Button
        onPress={() => navigation.push('Payment')}
        styleBtn={styles.btnProceedToPayment}
        styleText={styles.btnProceedToPaymentText}
        titleText={`Proceed to payment`}
      />
    </View>
  );
};

export default Checkout;
