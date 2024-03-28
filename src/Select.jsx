import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Picker } from "react-native";
import styles from '../style/style'; 

interface OptionType {
  value: string;
}

const Selectboxswap = () => {
  const [selectOptions1, setSelectOptions1] = useState([
    { value: "日本語" },
    { value: "option 2" },
    { value: "option 3" },
  ]);
  
  const [selectOptions2, setSelectOptions2] = useState([
    { value: "英語" },
    { value: "option 5" },
    { value: "option 6" },
  ]);
  
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const swapSelects = () => {
    const temp = selectOptions1;
    setSelectOptions1(selectOptions2);
    setSelectOptions2(temp);

    // Update selected values based on new options
    const newSelectedOption1 = selectOptions2.find(option => option.value === selectedOption1);
    const newSelectedOption2 = selectOptions1.find(option => option.value === selectedOption2);
    setSelectedOption1(newSelectedOption1 ? newSelectedOption1.value : '');
    setSelectedOption2(newSelectedOption2 ? newSelectedOption2.value : '');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.formSelect}>
          <Picker
            selectedValue={selectedOption1}
            style={{ height: 100, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedOption1(itemValue)}
          >
            {selectOptions1.map((option, index) => (
              <Picker.Item key={index} label={option.value} value={option.value} />
            ))}
          </Picker>
          <Text>Selected Value: {selectedOption1}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={swapSelects}>
          <Text style={styles.buttonText}>Click me!</Text>
        </TouchableOpacity>
        <View style={styles.formSelect}>
          <Picker
            selectedValue={selectedOption2}
            style={{ height: 100, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedOption2(itemValue)}
          >
            {selectOptions2.map((option, index) => (
              <Picker.Item key={index} label={option.value} value={option.value} />
            ))}
          </Picker>
          <Text>Selected Value: {selectedOption2}</Text>
        </View>
      </View>
    </View>
  );
};

export default Selectboxswap;
