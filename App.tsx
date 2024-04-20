/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {PrincipalNavigator} from './src/navigation/PrincipalNavigator.navigation.';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <PrincipalNavigator />
    </SafeAreaProvider>
  );
}

export default App;
