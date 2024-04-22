import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import LogoIcon from '../assets/icons/logo.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import {HeaderComponentStyles} from './Header.component.styles';
import baseStyles from '../shared/styles/baseStyles.styles';
import {useUserContext} from '../shared/hooks/useUserContext';
import {PlansQuestionSelectorComponentStyles} from './PlansQuestionSelector.component.styles';
import { resizeDimention } from '../utils/dimensions';
import {CardPersonSelectorComponent} from './CardPersonSelector.component';
import MeProtectionIcon from '../assets/icons/meProtection.svg';

export function PlansQuestionSelectorComponent() {
  const {width} = useWindowDimensions();
  const {question, info, container} = PlansQuestionSelectorComponentStyles({width});
  const {userInfo} = useUserContext();
  return (
    <View style={container}>
      <Text style={[baseStyles.defaultText, question]}>
        {userInfo?.name} ¿Para quién deseas cotizar?
      </Text>
      <Text style={[baseStyles.defaultText, info]}>
        Selecciona la opción que se ajuste más a tus necesidades
      </Text>
      <CardPersonSelectorComponent
        title="Para mi"
        Icon={<MeProtectionIcon width={35} height={35} />}
        info="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
      />
    </View>
  );
}
