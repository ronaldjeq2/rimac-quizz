import {StyleSheet} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
import {COLORS} from '../constants/colors.constants';

interface IHeaderComponentStyles {
  width: number;
}

export const SloganComponentStyles = ({width}: IHeaderComponentStyles) => {
  return StyleSheet.create({
    sloganContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    sloganDescription: {flex: 1},
    sloganChip: {
      backgroundColor: COLORS.LIGHT_GREEN,
      alignSelf: 'flex-start',
      paddingHorizontal: resizeDimention({width, scale: 2}),
      marginBottom: 10,
      paddingVertical: 5,
      fontSize: 14,
      fontWeight: 'bold',
      borderRadius: 8,
    },
    sloganText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    imageContainer: {flex: 1, alignItems: 'flex-end'},
    image: {borderRadius: 15},
  });
};
