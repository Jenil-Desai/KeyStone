import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<{
  Home: undefined;
  List: undefined;
}>;

export default function BottomNavigationBar() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{flex: 0.09}}>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('List')}>
          <Text>List</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFF',
    borderTopColor: '#030303',
    boxShadow: '0px 3px 10px -1px rgba(3,3,0,0.12)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});