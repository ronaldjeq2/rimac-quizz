import React from 'react';
import {useWindowDimensions, View} from 'react-native';

import {PlansScreenProps} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent} from '../components/Header.component';
import {PlansScreenStyles} from './PlansScreen.styles';
import {StepStatusComponent} from '../components/StepStatus.component';
import {PlansQuestionSelectorComponent} from '../components/PlansQuestionSelector.component';

export function PlansScreen({navigation}: PlansScreenProps) {
  const {width} = useWindowDimensions();
  const {safeAreaView, spacerView, containerView} = PlansScreenStyles({width});

  const navigateToHome = () => {
    console.log('finish');
  };

  return (
    <SafeAreaView style={safeAreaView}>
      <View>
        <View style={containerView}>
          <HeaderComponent />
          <StepStatusComponent />
        </View>
        <View style={spacerView} />
        <View style={containerView} />
        <View style={containerView}>
          <PlansQuestionSelectorComponent />
        </View>
      </View>
    </SafeAreaView>
  );
}
