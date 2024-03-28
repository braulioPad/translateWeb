import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home';
import DetailsScreen from './src/DetailsScreen';
import Header from './src/Header';
import Selectboxswap from './src/Select';
import Mic from './src/micblock';


export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const Stack = createStackNavigator();
  const handleTextInputBlur = () => {
    console.log('User stopped typing:', text1);
    // Perform any additional actions here, such as saving the input or triggering events
  };

  return (
    <View style={styles.container}>
          <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
            <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Header />

      <TextInput
        style={{ height: 250, width: 390, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginBottom: 10 }}
        placeholder="テキストを入力またはペーストしてください write text to translate"
        onChangeText={text => setText1(text)}
        value={text1}
        multiline
        onBlur={() => handleTextInputBlur()}
      />
      <TextInput
        editable={false}
        style={{ height: 150, width: 390, borderColor: '#F9F9F9', borderWidth: 1, marginBottom: 10, backgroundColor: '#F9F9F9', }}
        placeholder="Text translated"
        onChangeText={text => setText2(text)}
        value={text2}
        multiline
      />
      <Selectboxswap />
      <Mic />
      
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
