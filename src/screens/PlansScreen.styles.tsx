import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors.constants';
import {resizeDimention} from '../utils/dimensions';

interface IQuotesScreenStyles {
  width: number;
}

export const PlansScreenStyles = ({width}: IQuotesScreenStyles) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: COLORS.WHITE,
      flex: 1,
      paddingHorizontal: resizeDimention({width, scale: 6}),
    },
  });
};
