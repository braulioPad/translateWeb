import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Picker } from "react-native";

interface OptionType {
  value: string;
}

interface FormSelectProps {
  name: string;
  options: OptionType[];
  required?: boolean;
  style: object;
}

const FormSelect: React.FC<FormSelectProps> = ({ name, options, required = false, style }) => {
  return (
    <View style={style}>
      <Picker>
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.value} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const Selectbox = ({ options, style }: { options: OptionType[]; style: object }) => {
  return (
    <View style={style}>
      <FormSelect name="importing1" options={options} style={styles.formSelect} />
    </View>
  );
};

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

  const swapSelects = () => {
    const temp = selectOptions1;
    setSelectOptions1(selectOptions2);
    setSelectOptions2(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Selectbox options={selectOptions1} style={styles.formSelect} />
        <TouchableOpacity style={styles.button} onPress={swapSelects}>
          <Text style={styles.buttonText}>Click me!</Text>
        </TouchableOpacity>
        <Selectbox options={selectOptions2} style={styles.formSelect} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  formSelect: {
    width: 150,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginLeft: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Selectboxswap;
