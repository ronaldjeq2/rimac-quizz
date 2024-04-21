import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors.constants';
import {resizeDimention} from '../utils/dimensions';

interface IQuotesScreenStyles {
  width: number;
}

export const QuotesScreenStyles = ({width}: IQuotesScreenStyles) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: COLORS.WHITE,
      flex: 1,
      paddingHorizontal: resizeDimention({width, scale: 6}),
    },
    principalGradient: {
      position: 'absolute',
      width: 500,
      height: 500,
      top: -300,
      right: -280,
      bottom: 0,
      zIndex: -1,
    },
    scrollContainer: {flexGrow: 1},
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
      marginBottom: 20,
    },
    footerContainer: {
      backgroundColor: COLORS.BLACK,
      position: 'absolute',
      width: resizeDimention({width, scale: 96}),
      height: 80,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: resizeDimention({width, scale: 6}),
      paddingVertical: 0,
    },
    footerSpacer: {
      backgroundColor: COLORS.LIGHT_GRAY_PURPLE,
      width: '100%',
      height: 3,
      marginVertical: 2,
    },
    secondaryGradient: {
      position: 'absolute',
      width: 500,
      height: 500,
      bottom: -300,
      left: -300,
      zIndex: -1,
    },
  });
};
