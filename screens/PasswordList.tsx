import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPasswords} from '../db';
import PasswordItem from '../components/PasswordItem';

export default function PasswordList() {
  const [passwords, setPasswords] = useState<any>([]);

  useEffect(() => {
    const pass = getPasswords();
    setPasswords(pass);
  }, []);

  return (
    <View
      style={passwords.length ? {padding: 5, marginTop: 10} : styles.container}>
      {passwords.length ? (
        passwords.map(
          (password: {password: string; createdOn: string}, idx: number) => (
            <PasswordItem
              key={idx}
              password={password.password}
              createdAt={password.createdOn}
            />
          ),
        )
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.txt}>No Passwords Generated</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    fontWeight: '400',
  },
});
