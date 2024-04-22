import {StyleSheet} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
import {COLORS} from '../constants/colors.constants';

interface IHeaderComponentStyles {
  width: number;
  isSelected?: boolean;
}

export const CardPersonSelectorComponentStyles = ({
  width,
  isSelected,
}: IHeaderComponentStyles) => {
  return StyleSheet.create({
    cardContainer: {
      height: 160,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: resizeDimention({width, scale: 5}),
      shadowOpacity: 0.1,
      backgroundColor: COLORS.WHITE,
      zIndex: 2,
      elevation: 1,
      marginVertical: 15,
      borderWidth: 1,
      borderBlockColor: isSelected ? COLORS.BLACK : COLORS.TRANSPARENT,
    },
    selectorContainer: {alignItems: 'flex-end'},
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginVertical: 10,
    },
    titleStyles: {fontSize: 20, fontWeight: 'bold'},
  });
};
