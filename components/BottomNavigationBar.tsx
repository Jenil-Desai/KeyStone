import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome6';

type NavigationProp = NativeStackNavigationProp<{
  Home: undefined;
  List: undefined;
}>;

interface BottomNavigationBarProps {
  currentScreenName: string;
}

export default function BottomNavigationBar({
  currentScreenName,
}: BottomNavigationBarProps) {
  if (currentScreenName === 'Welcome') return null;

  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{flex: 0.09}}>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Icon name="house" size={28} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('List')}>
          <Icon name="table-list" size={28} />
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
