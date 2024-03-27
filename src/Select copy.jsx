import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const Select = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Japanese" value="jp" />
        <Picker.Item label="Chinese" value="cn" />
      </Picker>
      <Text>Selected Value: {selectedValue}</Text>
      <View  style={styles.Selectlist}>
      <View>
        <Text>En</Text>
      </View>
      <View>
      <Text>3</Text>
      </View>
      <View>
      <Text>Jp</Text>
      </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Selectlist: {
    width: '100%',
    height: 60,
    backgroundColor: '#ccc',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
  },
});

export default Select;
