import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACKS_ROUTES} from '../constants/routes.constants';
import {RootStackParamList} from '../types/RootStackParamList';
import {QuotesScreen} from '../screens/QuotesScreen';
import {useWindowDimensions} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PrincipalNavigator() {
  const {QUOTES} = STACKS_ROUTES;
  const {width} = useWindowDimensions();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={QUOTES}>
        <Stack.Screen
          options={{headerShown: false}}
          name={QUOTES}
          component={QuotesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
