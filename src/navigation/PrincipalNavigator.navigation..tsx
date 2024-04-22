import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {STACKS_ROUTES} from '../constants/routes.constants';
import {RootStackParamList} from '../types/RootStackParamList';
import {QuotesScreen} from '../screens/QuotesScreen';
import {PlansScreen} from '../screens/PlansScreen';
import {PlanUsedDetailsScreen} from '../screens/PlanUsedDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PrincipalNavigator() {
  const {QUOTES, PLANS, PLAN_USED_DETAILS} = STACKS_ROUTES;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={QUOTES}>
        <Stack.Screen
          options={{headerShown: false}}
          name={QUOTES}
          component={QuotesScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={PLANS}
          component={PlansScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={PLAN_USED_DETAILS}
          component={PlanUsedDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
