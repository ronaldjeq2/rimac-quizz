import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '@rneui/base';
import LogoIcon from '../assets/icons/logo.svg';
export function HeaderComponent() {
  return (
    <View>
      <View>
        <LogoIcon />
      </View>
      <View>
        <Icon type="material" name="phone" />
        <Text>(01) 411 6001</Text>
      </View>
    </View>
  );
}
