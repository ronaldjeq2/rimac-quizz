import React, {Suspense, lazy, useState} from 'react';
import {ScrollView, useWindowDimensions, View, Text} from 'react-native';

import {PlansScreenProps} from '../types/RootStackParamList';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HeaderComponent} from '../components/Header.component';
import {PlansScreenStyles} from './PlansScreen.styles';
import {StepStatusComponent} from '../components/StepStatus.component';
import {PlansQuestionSelectorComponent} from '../components/PlansQuestionSelector.component';
import {TYPEPLANS_WHIT_DISCOUNTS} from '../constants/typePlans-constants';

const LazyPlansSelectionComponent = lazy(
  () => import('../components/PlansSelection.component'),
);

export function PlansScreen({navigation}: PlansScreenProps) {
  const {width} = useWindowDimensions();
  const {safeAreaView, spacerView, containerView} = PlansScreenStyles({width});
  const [isWithDisccountOption, setIsWithDisccountOption] = useState(false);
  const [optionSelected, setOptionSelected] = useState<string | null>(null);
  const navigateToHome = () => {
    console.log('finish');
  };

  const onHandleOption = (id: string) => {
    setIsWithDisccountOption(TYPEPLANS_WHIT_DISCOUNTS.includes(id));
    setOptionSelected(id);
  };

  return (
    <SafeAreaView style={safeAreaView}>
      <ScrollView>
        <View style={containerView}>
          <HeaderComponent />
          <StepStatusComponent />
        </View>
        <View style={spacerView} />
        <View style={containerView} />
        <View style={containerView}>
          <PlansQuestionSelectorComponent onSelectedOption={onHandleOption} />
        </View>
        {!!optionSelected && (
          <Suspense fallback={<Text>Loading...</Text>}>
            <LazyPlansSelectionComponent
              existDisscount={isWithDisccountOption}
            />
          </Suspense>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
