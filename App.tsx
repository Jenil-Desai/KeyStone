import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [password, setPassword] = useState('');

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(true);
  const [numbers, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLenght: number) => {
    let characterList = '';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    const digitsChars = '0123456789';
    const specialChars = `!@#$%^&*()_+{}|:"<>?,./;'[]\``;

    if (upperCase) characterList += upperCaseChars;
    if (lowerCase) characterList += lowerCaseChars;
    if (numbers) characterList += digitsChars;
    if (symbols) characterList += specialChars;

    const passwordResult = createPassword(characterList, passwordLenght);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };
  const createPassword = (characters: string, passwordLenght: number) => {
    let result = '';
    for (let index = 0; index < passwordLenght; index++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(true);
    setNumber(false);
    setSymbols(false);
  };

  return (
    <View>
      <Text>Key Stone</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
