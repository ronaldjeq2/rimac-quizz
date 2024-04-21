import {StyleSheet} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
import {COLORS} from '../constants/colors.constants';

interface IHeaderComponentStyles {
  width: number;
}

export const StepStatusComponentStyles = ({width}: IHeaderComponentStyles) => {
  return StyleSheet.create({
    statusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 15,
    },
    textContainer: {
      flex: 17,
      marginHorizontal: resizeDimention({width, scale: 6}),
    },
    textStyle: {fontSize: 10, fontWeight: 'bold'},
    statusBarContainer: {
      flex: 53,
      backgroundColor: COLORS.STATUS_LIGHT,
      height: 10,
      borderRadius: 5,
    },
    statusBarStyle: {
      width: '10%',
      backgroundColor: COLORS.STATUS_GRAY,
      height: 10,
      borderRadius: 5,
    },
  });
};
