import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors.constants';

interface IQuotesScreenStyles {
  width: number;
}

export const QuotesScreenStyles = ({width}: IQuotesScreenStyles) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: COLORS.WHITE,
      flex: 1,
    },
    spacer: {
      backgroundColor: COLORS.LIGHT_GRAY,
      width: '100%',
      height: 3,
      marginVertical: 15,
    },
    info: {
      color: COLORS.BLACK_GRAY,
      fontSize: 17,
      fontWeight: 'bold',
    },
  });
};
