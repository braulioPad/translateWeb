import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={{ width: 390,  marginBottom: 10,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',margin: 'auto', }}>
      <View>Back</View>
      <View><Text style={styles.title}>Home</Text></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#ccc',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    color: '#ccc', 
  },
});

export default Header;