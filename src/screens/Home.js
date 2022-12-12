import {
  View,
  Text,
  Image,
  TextInput,
  DrawerLayoutAndroid,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, {useRef} from 'react';
import Footer from '../components/Footer/Footer'

import styles from '../styles/Home';

const Home = ({navigation}) => {
  const drawer = useRef(null);

  // TODO: Test API
  // const handleLogout = async() => {
  //   let token = 
  //   try {
  //     const response = await Axios.delete(
  //       `http://192.168.18.90:8080/api/v1/auth/logout`,
  //       {
  //         headers: {
  //           'x-access-token': token,
  //         },
  //       },
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  // TODO: Navigation view
  const navigationView = () => (
    <View style={[styles.hmContainer, styles.navigationContainer]}>
      <View style={styles.profile}>
        <Image
          source={require('../assets/images/women.png')}
          style={styles.imageProfile}
        />
        <Text style={styles.name}>{`Shafira`}</Text>
        <Text style={styles.email}>{`shafira@gmail.com`}</Text>
      </View>
      <View style={styles.screenList}>
        <View style={styles.list}>
          <Image
            source={require('../assets/icons/gg_profile.png')}
            style={styles.menuIconList}
          />
          <Text style={styles.nameList}>{`Edit Profile`}</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require('../assets/icons/icons8_buy.png')}
            style={styles.menuIconList}
          />
          <Text style={styles.nameList}>{`Orders`}</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require('../assets/icons/menu-1.png')}
            style={styles.menuIconList}
          />
          <Text style={styles.nameList}>{`All menu`}</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require('../assets/icons/ic_outline-sticky-note-2.png')}
            style={styles.menuIconList}
          />
          <Text style={styles.nameList}>{`Privacy policy`}</Text>
        </View>
        <View style={styles.list}>
          <Image
            source={require('../assets/icons/whh_securityalt.png')}
            style={styles.menuIconList}
          />
          <Text style={styles.nameList}>{`Security`}</Text>
        </View>
        <View style={[styles.list, styles.signOutList]}>
          <TouchableOpacity 
          // onPress={handleLogout}
          >
            <Text style={styles.nameList}>{`Sign-Out`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={`left`}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Image
              source={require('../assets/icons/vector.png')}
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image
              source={require('../assets/icons/cart.png')}
              style={styles.cartIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleTextSection}>
          <Text style={styles.titleText}>A good coffee is a good day</Text>
        </View>
        <View style={styles.inputSection}>
          <Image
            source={require('../assets/icons/search-black.png')}
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.textInput} />
        </View>
        <View style={styles.productSection}>
          <View style={styles.listProducts}>
            <ScrollView horizontal>
              <Text style={styles.listProduct}>Favorite</Text>
              <Text style={styles.listProduct}>Promo</Text>
              <Text style={styles.listProduct}>Coffee</Text>
              <Text style={styles.listProduct}>Non Coffee</Text>
            </ScrollView>
          </View>
          <View style={styles.products}>
            <TouchableOpacity onPress={() => navigation.navigate('Products')}>
              <Text style={styles.seeMore}>See more</Text>
            </TouchableOpacity>
            <ScrollView horizontal>
              <View style={styles.product}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetail')}>
                  <Image
                    source={require('../assets/images/image-12.png')}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <Text style={styles.title}>{`Hazelnut Latte`}</Text>
                <Text style={styles.price}>{`IDR 25.000`}</Text>
              </View>
              <View style={styles.product}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetail')}>
                  <Image
                    source={require('../assets/images/image-12.png')}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <Text style={styles.title}>{`Hazelnut Latte`}</Text>
                <Text style={styles.price}>{`IDR 25.000`}</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <Footer
          onPressToChat={() => navigation.navigate('Chat')}
          onPressToProfile={() => navigation.navigate('Profile')}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

export default Home;
