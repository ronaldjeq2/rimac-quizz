/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PrincipalNavigator} from './src/navigation/PrincipalNavigator.navigation.';
import {AppStyles} from './App.styles';
import {useWindowDimensions} from 'react-native';
import {UserProvider} from './src/contexts/UserContext';

function App(): React.JSX.Element {
  const {width} = useWindowDimensions();
  const {safeAreaContainer} = AppStyles({width});

  return (
    <SafeAreaProvider style={safeAreaContainer}>
      <UserProvider>
        <PrincipalNavigator />
      </UserProvider>
    </SafeAreaProvider>
  );
}

export default App;
