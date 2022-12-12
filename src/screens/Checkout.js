import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';

import Header from '../components/Header/Header';
import Button from '../components/Button';
import styles from '../styles/Checkout';
import {TextInput} from 'react-native-gesture-handler';
import RadioGroup from 'react-native-radio-buttons-group';

const Checkout = ({navigation}) => {
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'Door delivery',
      value: 'Door delivery',
    },
    {
      id: '2',
      label: 'Pick up at store',
      value: 'Pick up at store',
    },
    {
      id: '3',
      label: 'Dine in',
      value: 'Dine in',
    },
  ]);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

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
          <ScrollView horizontal>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
            />
          </ScrollView>
          {/* <Text style={styles.deliveryItem}>Door delivery</Text>
          <Text style={styles.deliveryItem}>Pick up at store</Text>
          <Text style={styles.deliveryItem}>Dine in</Text> */}
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
