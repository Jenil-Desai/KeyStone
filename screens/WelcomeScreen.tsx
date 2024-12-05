import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
const exampleImage = require('../public/images/WelcomeScreenImage.png');

type NavigationProp = NativeStackNavigationProp<{
  Home: undefined;
  List: undefined;
}>;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    async function main() {
      const res = await AsyncStorage.getItem('isFirst');
      if (res === 'true') navigation.navigate('Home');
    }
    main();
  }, []);

  async function handleGenerate() {
    await AsyncStorage.setItem('isFirst', 'true');
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={exampleImage} />
        <Text style={styles.headingText}>Key Stone</Text>
        <Text style={styles.subTxt}>
          Customize your secure password settings.
        </Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={handleGenerate}>
        <Text style={{textAlign: 'center', fontWeight: '500', fontSize: 20}}>
          Generate
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 18,
  },
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: '600',
    marginTop: 10,
  },
  subTxt: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  btn: {
    backgroundColor: '#F2D3CE',
    width: '100%',
    padding: 20,
    borderRadius: 35,
  },
});
