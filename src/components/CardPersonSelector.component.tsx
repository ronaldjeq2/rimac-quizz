import React, {ReactNode} from 'react';
import {Pressable, Text, View, useWindowDimensions} from 'react-native';
import CheckCircleIcon from '../assets/icons/checkcircleIcon.svg';
import CircleIcon from '../assets/icons/circleIcon.svg';
import {CardPersonSelectorComponentStyles} from './CardPersonSelector.component.styles';
import baseStyles from '../shared/styles/baseStyles.styles';

interface CardPersonSelectorComponent {
  title: string;
  info: string;
  Icon: ReactNode;
  id: string;
  itemSelected?: string;
  onPress: (item: string) => void;
}

export function CardPersonSelectorComponent({
  title,
  info,
  Icon,
  id,
  itemSelected,
  onPress,
}: CardPersonSelectorComponent) {
  const {width} = useWindowDimensions();
  const isSelected = id === itemSelected;
  const {cardContainer, selectorContainer, titleContainer, titleStyles} =
    CardPersonSelectorComponentStyles({
      width,
      isSelected,
    });

  const handlePress = () => {
    onPress(id);
  };

  return (
    <Pressable style={cardContainer} onPress={handlePress}>
      <View style={selectorContainer}>
        {isSelected ? <CheckCircleIcon /> : <CircleIcon />}
      </View>
      <View style={titleContainer}>
        {Icon}
        <Text style={[baseStyles.defaultText, titleStyles]}>{title}</Text>
      </View>
      <Text style={[baseStyles.defaultText]}>{info}</Text>
    </Pressable>
  );
}
