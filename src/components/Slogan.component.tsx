import React from 'react';
import {Text, View, useWindowDimensions, Image} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
import {SloganComponentStyles} from './Slogan.component.styles';
import baseStyles from '../shared/styles/baseStyles.styles';

export function SloganComponent() {
  const {width} = useWindowDimensions();
  const {
    sloganContainer,
    sloganDescription,
    sloganChip,
    sloganText,
    imageContainer,
    image,
  } = SloganComponentStyles({width});
  return (
    <View style={sloganContainer}>
      <View style={sloganDescription}>
        <Text style={[baseStyles.defaultText, sloganChip]}>
          Seguro Salud Flexible
        </Text>
        <Text style={[baseStyles.defaultText, sloganText]}>
          Creado para ti y tu familia
        </Text>
      </View>
      <View style={imageContainer}>
        <Image
          width={resizeDimention({width, scale: 34})}
          source={require('../assets/images/slogan.png')}
          style={image}
        />
      </View>
    </View>
  );
}
