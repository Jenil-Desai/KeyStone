import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>🔒</Text>
        <Text style={styles.title}>KeyStone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFF',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 25,
    gap: 12,
    boxShadow: '0px 3px 10px -1px rgba(3,3,0,0.12)',
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#030303',
  },
});
