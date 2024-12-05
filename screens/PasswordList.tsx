import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPasswords} from '../db';
import PasswordItem from '../components/PasswordItem';

export default function PasswordList({navigation}: {navigation: any}) {
  const [passwords, setPasswords] = useState<any>([]);

  useEffect(() => {
    const pass = getPasswords();
    setPasswords(pass);
  }, []);

  return (
    <View>
      {passwords.map(
        (password: {password: string; createdOn: string}, idx: number) => (
          <PasswordItem
            key={idx}
            password={password.password}
            createdAt={password.createdOn}
          />
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
