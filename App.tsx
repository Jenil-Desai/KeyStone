import * as React from 'react';
import {
  NavigationContainer,
  NavigationRoute,
  ParamListBase,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PasswordCreation from './screens/PasswordCreation';
import PasswordList from './screens/PasswordList';
import BottomNavigationBar from './components/BottomNavigationBar';
import Header from './components/Header';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [currentRouteName, setCurrentRouteName] = React.useState('Welcome');

  const handleStateChange = (
    state:
      | Readonly<
          Readonly<{
            key: string;
            index: number;
            routeNames: string[];
            history?: unknown[];
            routes: NavigationRoute<ParamListBase, string>[];
            type: string;
            stale: false;
          }>
        >
      | undefined,
  ) => {
    if (state) {
      const route = state.routes[state.index];
      setCurrentRouteName(route ? route.name : 'Unknown');
    }
  };

  return (
    <NavigationContainer onStateChange={state => handleStateChange(state)}>
      <Header currentScreenName={currentRouteName} />
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
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
      <BottomNavigationBar currentScreenName={currentRouteName} />
    </NavigationContainer>
  );
};

export default App;
