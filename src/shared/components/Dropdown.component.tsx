import React, {useState} from 'react';
import {View, Text, StyleProp, ViewStyle, Pressable} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../../constants/colors.constants';
import baseStyles from '../styles/baseStyles.styles';
import {DropdownComponentStyles} from './Dropdown.component.styles';

interface IDropdownItem {
  label: string;
  value: string;
}

interface IDropdownComponentProps {
  data: IDropdownItem[];
  containerStyles?: StyleProp<ViewStyle>;
  dropdownStyles?: StyleProp<ViewStyle>;
  onChange?: (t: any) => void;
}

const DropdownComponent = ({
  data,
  containerStyles,
  dropdownStyles,
  onChange,
}: IDropdownComponentProps) => {
  const [value, setValue] = useState<null | string>(null);
  const {itemStyle, textItem, placeholderStyle, selectedTextStyle, iconStyle} =
    DropdownComponentStyles;
  const renderItem = (item: IDropdownItem) => {
    return (
      <View style={itemStyle}>
        <Text style={textItem}>{item.label}</Text>
      </View>
    );
  };

  const handleDropDow = (valueDrowpdown: string) => {
    onChange?.(valueDrowpdown);
    setValue(valueDrowpdown);
  };

  return (
    <Pressable style={[containerStyles]}>
      <Dropdown
        style={[dropdownStyles]}
        placeholderStyle={[baseStyles.defaultText, placeholderStyle]}
        selectedTextStyle={[baseStyles.defaultText, selectedTextStyle]}
        iconStyle={iconStyle}
        iconColor={COLORS.BLACK}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Seleccione documento"
        value={value}
        onChange={item => {
          handleDropDow(item.value);
        }}
        renderItem={renderItem}
      />
    </Pressable>
  );
};

export default DropdownComponent;
