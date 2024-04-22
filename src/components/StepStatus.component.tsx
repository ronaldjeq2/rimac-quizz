import React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {StepStatusComponentStyles} from './StepStatus.component.styles';
import BackCircleIcon from '../assets/icons/backCircle.svg';
import {resizeDimention} from '../utils/dimensions';
import baseStyles from '../shared/styles/baseStyles.styles';
import {COLORS} from '../constants/colors.constants';
export function StepStatusComponent() {
  const {width} = useWindowDimensions();
  const {
    statusContainer,
    textContainer,
    textStyle,
    statusBarContainer,
    statusBarStyle,
  } = StepStatusComponentStyles({width});
  return (
    <View style={statusContainer}>
      <BackCircleIcon
        width={resizeDimention({width, scale: 6})}
        height={resizeDimention({width, scale: 6})}
      />
      <View style={textContainer}>
        <Text style={[baseStyles.defaultText, textStyle]}>PASO 1 DE 2</Text>
      </View>
      <View style={statusBarContainer}>
        <View style={statusBarStyle} />
      </View>
    </View>
  );
}
