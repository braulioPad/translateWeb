import React, { useState } from 'react';
import { View, Text, TextInput, Picker,StyleSheet  } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleTextInputBlur = () => {
    console.log('User stopped typing:', text1);
    // Perform any additional actions here, such as saving the input or triggering events
  };
  
  return (
    <View style={styles.container}>
     <TextInput
        style={{ height: 40, width: 200, bordeColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="write text to translate"
        onChangeText={text => setText1(text)}
        value={text1}
        multiline
        onBlur={() => handleTextInputBlur()}
      />
      <TextInput
        editable={false}
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Text translated"
        onChangeText={text => setText2(text)}
        value={text2}
        multiline
      />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
