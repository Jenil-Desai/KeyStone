import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import moment from 'moment';
import Clipboard from '@react-native-clipboard/clipboard';

interface PasswordItemProps {
  password: string;
  createdAt: string;
}

export default function PasswordItem({password, createdAt}: PasswordItemProps) {
  function handleCopy() {
    Clipboard.setString(password);
  }

  return (
    <View style={styles.container}>
      <View style={styles.passwordContainer}>
        <View style={styles.txtContainer}>
          <Text style={styles.passwordTxt}>{password}</Text>
          <Text style={styles.dateTxt}>
            Created On : {moment(createdAt).format('DD MMM YYYY').toString()}
          </Text>
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={handleCopy}>
          <Icon name="copy" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 8,
  },
  passwordContainer: {
    width: '90%',
    height: 90,
    backgroundColor: '#B0E0E6',
    borderRadius: 90 / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  txtContainer: {},
  passwordTxt: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
  dateTxt: {},
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#F2D3CE',
    borderRadius: 50 / 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
