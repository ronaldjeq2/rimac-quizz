import React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import LogoIcon from '../assets/icons/logo.svg';
import PhoneIcon from '../assets/icons/phone.svg';
import {HeaderComponentStyles} from './Header.component.styles';
import baseStyles from '../shared/styles/baseStyles.styles';
export function HeaderComponent() {
  const {width} = useWindowDimensions();
  const {headerContainer, itemContainer, itemContainerRight, phoneText} =
    HeaderComponentStyles({width});
  return (
    <View style={headerContainer}>
      <View style={itemContainer}>
        <LogoIcon width={50} height={50} />
      </View>
      <View style={itemContainerRight}>
        <PhoneIcon width={20} height={20} />
        <Text style={[baseStyles.defaultText, phoneText]}>(01) 411 6001</Text>
      </View>
    </View>
  );
}
