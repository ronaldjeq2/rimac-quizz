import React from 'react';
import {Text, useWindowDimensions} from 'react-native';

import {QuotesScreenProps} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent} from '../components/Header.component';
import {QuotesScreenStyles} from './QuotesScreen.styles';
import {SloganComponent} from '../components/Slogan.component';

export function QuotesScreen({navigation}: QuotesScreenProps) {
  const {width} = useWindowDimensions();
  const {safeAreaView} = QuotesScreenStyles({width});
  return (
    <SafeAreaView style={safeAreaView}>
      <HeaderComponent />
      <SloganComponent />
      <Text>Hola</Text>
    </SafeAreaView>
  );
}
