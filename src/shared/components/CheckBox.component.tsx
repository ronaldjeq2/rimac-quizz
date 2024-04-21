import React, {useState} from 'react';
import {View, Text, StyleProp, ViewStyle, Pressable} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../../constants/colors.constants';
import baseStyles from '../styles/baseStyles.styles';
import {DropdownComponentStyles} from './Dropdown.component.styles';
import {CheckBox} from '@rneui/themed';
import {CheckBoxComponentStyles} from './CheckBox.component.styles';

interface ICheckBoxComponentProps {
  title: string;
}

const CheckBoxComponent = ({title}: ICheckBoxComponentProps) => {
  const {textStyles, containerStyle} = CheckBoxComponentStyles;
  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <CheckBox
      checked={checked}
      onPress={toggleCheckbox}
      iconType="material-community"
      checkedIcon="checkbox-marked"
      uncheckedIcon="checkbox-blank-outline"
      checkedColor={COLORS.BLACK}
      title={title}
      textStyle={[baseStyles.defaultText, textStyles]}
      containerStyle={containerStyle}
      size={40}
    />
  );
};

export default CheckBoxComponent;
