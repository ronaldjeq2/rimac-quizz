import React from 'react';
import {ScrollView, Text, useWindowDimensions, View} from 'react-native';

import {QuotesScreenProps} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent} from '../components/Header.component';
import {QuotesScreenStyles} from './QuotesScreen.styles';
import {SloganComponent} from '../components/Slogan.component';
import baseStyles from '../shared/styles/baseStyles.styles';
import {QuotesFormComponent} from '../components/QuotesForm.component';
import {RadialGradient} from 'react-native-gradients';
import {COLORS, GRADIENTS} from '../constants/colors.constants';
import WhiteLogoIcon from '../assets/icons/whiteLogo.svg';
import {STACKS_ROUTES} from '../constants/routes.constants';

export function QuotesScreen({navigation}: QuotesScreenProps) {
  const {width} = useWindowDimensions();
  const {
    safeAreaView,
    principalGradient,
    scrollContainer,
    spacer,
    info,
    footerContainer,
    footerSpacer,
    secondaryGradient,
  } = QuotesScreenStyles({
    width,
  });
  const {PLANS} = STACKS_ROUTES;
  const navigateToHome = () => {
    navigation.replace(PLANS);
  };

  return (
    <SafeAreaView style={[safeAreaView]}>
      <View style={principalGradient}>
        <RadialGradient
          colorList={GRADIENTS.PRINCIPAL}
          x="50%"
          y="50%"
          rx="50%"
          ry="50%"
        />
      </View>
      <ScrollView
        contentContainerStyle={scrollContainer} // Permite el desplazamiento
        showsVerticalScrollIndicator={false} // Opcional, para ocultar el indicador
      >
        <HeaderComponent />
        <SloganComponent />
        <View style={spacer} />
        <Text style={[baseStyles.defaultText, info]}>
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
          asesoría, 100% online
        </Text>
        <QuotesFormComponent successFunction={navigateToHome} />
      </ScrollView>
      <View style={footerContainer}>
        <WhiteLogoIcon width={120} height={30} />
        <View style={footerSpacer} />
        <Text style={{color: COLORS.WHITE}}>
          © 2023 RIMAC Seguros y Reaseguros.
        </Text>
      </View>
      <View style={secondaryGradient}>
        <RadialGradient
          colorList={GRADIENTS.SECONDARY}
          x="50%"
          y="50%"
          rx="50%"
          ry="50%"
        />
      </View>
    </SafeAreaView>
  );
}
