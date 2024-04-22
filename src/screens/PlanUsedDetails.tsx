import React, {Suspense, lazy, useState} from 'react';
import {ScrollView, useWindowDimensions, View, Text} from 'react-native';

import {PlanUsedDetailsScreenProps} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PlanUsedDetailsScreenStyles} from './PlanUsedDetails.styles';
import {HeaderComponent} from '../components/Header.component';
import {useUserContext} from '../shared/hooks/useUserContext';
import baseStyles from '../shared/styles/baseStyles.styles';
import PersonsIcons from '../assets/icons/icFamily.svg';
export function PlanUsedDetailsScreen({
  navigation,
  route,
}: PlanUsedDetailsScreenProps) {
  const {width} = useWindowDimensions();
  const {planInfo, priceToSend} = route.params;
  const {
    safeAreaView,
    headerText,
    cardContainer,
    subtitle,
    userNameInfoContainer,
    nameStyle,
    spacer,
    adinitionalInfoContainer,
    aditionalSubtitle,
  } = PlanUsedDetailsScreenStyles({width});
  const {userInfo} = useUserContext();
  console.log({userInfo});
  const {name, docType, lastName, phoneNumber, docNumber} = userInfo;
  const {name: planName} = planInfo;
  return (
    <SafeAreaView style={safeAreaView}>
      <HeaderComponent />
      <Text style={[baseStyles.defaultText, headerText]}>
        Resumen del seguro
      </Text>
      <View style={cardContainer}>
        <Text style={subtitle}>PRECIOS CALCULADOS PARA:</Text>
        <View style={userNameInfoContainer}>
          <PersonsIcons />
          <Text style={[baseStyles.defaultText, nameStyle]}>
            {name} {lastName}
          </Text>
        </View>
        <View style={spacer} />
        <View style={adinitionalInfoContainer}>
          <Text style={[baseStyles.defaultText, aditionalSubtitle]}>
            Responsable de pago
          </Text>
          <Text>
            {docType.toUpperCase()}: {docNumber}
          </Text>
          <Text>Celular: {phoneNumber}</Text>
          <Text style={[baseStyles.defaultText, aditionalSubtitle]}>
            Plan elegido
          </Text>
          <Text>{planName}</Text>
          <Text>Costo del Plan: ${priceToSend} al mes</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
