import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [password, setPassword] = useState('');

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumber] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const generatePasswordString = (passwordLenght: number) => {};
  const createPassword = (characters: string, passwordLenght: number) => {};
  const resetPasswordState = () => {};

  return (
    <View>
      <Text>Key Stone</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
