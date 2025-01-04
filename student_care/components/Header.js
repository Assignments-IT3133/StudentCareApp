import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
    <View style={styles.textContainer}>
      <Text style={styles.headerText}>UOV Student Care</Text>
      </View>
      <View style={styles.logoContainer}>
      <Image
        source={require('../assets/Img/Logo.png')}
        style={styles.logo}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width : "100%",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  textContainer: {
    width: "100%",
    height: 60,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: "90%",
    height: 100 ,
    top: 5,
    left: 0,
    right: 0,
    
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
});

export default Header;
