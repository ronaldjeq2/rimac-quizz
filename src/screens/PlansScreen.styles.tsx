import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors.constants';
import {resizeDimention} from '../utils/dimensions';

interface IQuotesScreenStyles {
  width: number;
}

export const PlansScreenStyles = ({width}: IQuotesScreenStyles) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: COLORS.LIGHT_WHITE,
      flex: 1,
    },
    containerView: {
      paddingHorizontal: resizeDimention({width, scale: 6}),
    },
    spacerView: {backgroundColor: COLORS.GRAY_PURPLE, height: 2, width: '100%'},
  });
};
