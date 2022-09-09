/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';


const UselessTextInput = () => {
  
  const [number, onChangeNumber] = React.useState(0)
  const [numberF, setNumberF] = React.useState(0)
  const test = parseFloat(number) * parseFloat(numberF);

  //if(isNaN(test)){
  //  test = 0
  //}

  return (
    <SafeAreaView>
      <Text style={{textAlign:'center', fontSize: 50}}>Calculator</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Number One"
        keyboardType="numeric"
      />
      <Text style={{textAlign:'center'}}>*</Text>                                               
      <TextInput
        style={styles.input}
        onChangeText={setNumberF}
        value={numberF}
        placeholder="number Two"
        keyboardType="numeric"
      />
       <Text style={{textAlign: 'center', fontSize: 30}}>{test}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;