import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';

import {QuotesScreenProps} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent} from '../components/Header.component';
import {QuotesScreenStyles} from './QuotesScreen.styles';
import {SloganComponent} from '../components/Slogan.component';
import baseStyles from '../shared/styles/baseStyles.styles';
import {COLORS} from '../constants/colors.constants';

export function QuotesScreen({navigation}: QuotesScreenProps) {
  const {width} = useWindowDimensions();
  const {safeAreaView, spacer, info} = QuotesScreenStyles({width});
  return (
    <SafeAreaView style={safeAreaView}>
      <HeaderComponent />
      <SloganComponent />
      <View style={spacer} />
      <Text style={[baseStyles.defaultText, info]}>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría, 100% online
      </Text>
    </SafeAreaView>
  );
}
