import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PasswordCreation from './screens/PasswordCreation';
import PasswordList from './screens/PasswordList';
import BottomNavigationBar from './components/BottomNavigationBar';
import Header from './components/Header';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={PasswordCreation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="List"
          component={PasswordList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <BottomNavigationBar />
    </NavigationContainer>
  );
};

export default App;
