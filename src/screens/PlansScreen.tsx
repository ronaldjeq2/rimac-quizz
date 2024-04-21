import React from 'react';
import {useWindowDimensions, View} from 'react-native';

import {PlansScreenProps} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent} from '../components/Header.component';
import {PlansScreenStyles} from './PlansScreen.styles';
import { StepStatusComponent } from '../components/StepStatus.component';

export function PlansScreen({navigation}: PlansScreenProps) {
  const {width} = useWindowDimensions();
  const {safeAreaView} = PlansScreenStyles({width});
  const navigateToHome = () => {
    console.log('finish');
  };

  return (
    <SafeAreaView style={safeAreaView}>
      <View>
        <HeaderComponent />
        <StepStatusComponent />
      </View>
    </SafeAreaView>
  );
}
