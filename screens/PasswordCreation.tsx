import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {PasswordSchema} from '../schema/schema';
import {Formik} from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import realm, {addPassword} from '../db';

const {width, height} = Dimensions.get('screen');

export default function PasswordCreation({navigation}: {navigation: any}) {
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

  const savePassword = () => {
    console.log(password);
    realm.write(() => {
      realm.create('Password', {
        password: password,
        createdOn: new Date(),
      });
    });
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#FFF'}}>
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePasswordString(Number(values.passwordLength));
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <View style={styles.formSubContainer}>
                  <View>
                    <Text style={styles.inputLabelStyle}>Password Length</Text>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Ex. 8"
                      keyboardType="numeric"
                    />
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={{color: '#D31B00', marginTop: 10}}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <Text style={[styles.inputLabelStyle, {marginTop: 25}]}>
                    Include the following characters:
                  </Text>
                  <View style={styles.checkboxContainer}>
                    <View>
                      <BouncyCheckbox
                        isChecked={lowerCase}
                        onPress={() => setLowerCase(!lowerCase)}
                        fillColor="#29AB87"
                      />
                    </View>
                    <Text style={styles.checkboxLabelStyles}>
                      Lowercase Letters
                    </Text>
                  </View>
                  <View style={styles.checkboxContainer}>
                    <View>
                      <BouncyCheckbox
                        isChecked={upperCase}
                        onPress={() => setUpperCase(!upperCase)}
                        fillColor="#29AB87"
                      />
                    </View>
                    <Text style={styles.checkboxLabelStyles}>
                      Uppercase Letters
                    </Text>
                  </View>
                  <View style={styles.checkboxContainer}>
                    <View>
                      <BouncyCheckbox
                        isChecked={numbers}
                        onPress={() => setNumber(!numbers)}
                        fillColor="#29AB87"
                      />
                    </View>
                    <Text style={styles.checkboxLabelStyles}>Numbers</Text>
                  </View>
                  <View style={styles.checkboxContainer}>
                    <View>
                      <BouncyCheckbox
                        isChecked={symbols}
                        onPress={() => setSymbols(!symbols)}
                        fillColor="#29AB87"
                      />
                    </View>
                    <Text style={styles.checkboxLabelStyles}>
                      Special Characters
                    </Text>
                  </View>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      onPress={() => handleSubmit()}
                      style={styles.primaryBtn}
                      disabled={!isValid}>
                      <Text style={styles.primaryBtnTxt}>Generate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        handleReset();
                        resetPasswordState();
                      }}
                      style={styles.primaryBtn}
                      disabled={!isValid}>
                      <Text style={styles.primaryBtnTxt}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.secondaryButtonContainer}>
                    <TouchableOpacity
                      onPress={() => savePassword()}
                      style={styles.secondaryBtn}
                      disabled={!touched.passwordLength}>
                      <Text style={styles.primaryBtnTxt}>Save Password</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
        <View style={styles.generatedPasswordContainerMain}>
          {isPassGenerated ? (
            <View style={styles.generatedPasswordContainer}>
              <Text selectable={true} style={styles.generatedPasswordTxt}>
                {password}
              </Text>
            </View>
          ) : (
            <View style={styles.generatedPasswordContainer}>
              <Text style={styles.generatedPasswordTxt}>
                Generated Password will appear here
              </Text>
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  formSubContainer: {
    padding: 10,
  },
  inputLabelStyle: {
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 10,
  },
  inputStyle: {
    fontSize: 15,
    paddingLeft: 20,
    color: '#030303',
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#030303',
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxLabelStyles: {
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 40,
  },
  primaryBtn: {
    backgroundColor: '#B0E0E6',
    width: '50%',
    padding: 20,
    borderRadius: 35,
  },
  primaryBtnTxt: {
    textAlign: 'center',
    fontWeight: '400',
  },
  secondaryButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 9,
  },
  secondaryBtn: {
    backgroundColor: '#B0E0E6',
    width: '100%',
    padding: 20,
    borderRadius: 35,
  },
  generatedPasswordContainerMain: {
    padding: 18,
  },
  generatedPasswordContainer: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#030303',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generatedPasswordTxt: {
    fontSize: 15,
    color: '#030303',
    textAlign: 'center',
  },
});
