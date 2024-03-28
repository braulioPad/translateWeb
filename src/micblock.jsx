import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MicIcon from '../image/Mic.svg';
import styles from '../style/style'; 

const Mic = () => {
  return (
    <View style={styles.Micblock}>
      <View style={styles.iconContainer}>
        <Image source={require('../image/Mic.svg')} style={styles.icon} />
      </View>
    </View>
  );
};



export default Mic;
