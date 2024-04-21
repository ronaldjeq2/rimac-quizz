import {StyleSheet} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
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
  });
};