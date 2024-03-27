import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Select = () => {
  const [elements, setElements] = useState(['Value 1', 'Value 2']);

  const swapElements = () => {
    setElements(prevElements => {
      // 创建一个新数组，交换第一个和第二个元素的位置
      const newElements = [...prevElements];
      const temp = newElements[0];
      newElements[0] = newElements[1];
      newElements[1] = temp;
      return newElements;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{elements[0]}</Text>
      <Text style={styles.text}>{elements[1]}</Text>
      <Button title="Swap" onPress={swapElements} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Select;
