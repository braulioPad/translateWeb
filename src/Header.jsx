import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HomeIcon from '../image/home.svg';
import BackIcon from '../image/back.svg';
import styles from '../style/style'; 

const Header = () => {
  return (
    <View style={styles.header}>
       <View style={{ width: 390,  marginBottom: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',margin: 'auto', }}>
      <View style={styles.iconContainer}>
        <Image source={require('../image/back.svg')} style={styles.icon} />
        <Text>Back</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={require('../image/home.svg')} style={styles.icon} />
        <Text>home</Text>
      </View>
      </View>
    </View>
  );
};

export default Header;
