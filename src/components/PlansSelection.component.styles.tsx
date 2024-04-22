import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors.constants';
import {resizeDimention} from '../utils/dimensions';

interface IPlansSelectionComponentStylesProps {
  width: number;
}

export const PlansSelectionComponentStyles = ({
  width,
}: IPlansSelectionComponentStylesProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: resizeDimention({width, scale: 6}),
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      gap: 20,
    },
    containerIcon: {
      borderColor: COLORS.STATUS_GRAY,
      borderWidth: 1,
      borderRadius: 20,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
    },
  });
};
