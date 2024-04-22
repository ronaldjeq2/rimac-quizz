import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors.constants';

export const PlansSelectionComponentStyles = () => {
  return StyleSheet.create({
    pagination: {
      flexDirection: 'row', // Barra de índice horizontal
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
