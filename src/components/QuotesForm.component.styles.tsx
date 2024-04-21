import {StyleSheet} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
import {COLORS} from '../constants/colors.constants';

interface IHeaderComponentStyles {
  width: number;
}

export const QuotesFormComponentStyles = ({width}: IHeaderComponentStyles) => {
  return StyleSheet.create({
    idContainerStyle: {
      flexDirection: 'row',
      width: '100%',
    },
    containerFieldStyle: {
      flex: 35,
      height: 80,
      justifyContent: 'center',
      paddingHorizontal: resizeDimention({width, scale: 4}),
      borderWidth: 1,
    },
    dropddownFieldStyle: {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    inputFieldStyle: {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    inputStyles: {
      backgroundColor: COLORS.TRANSPARENT,
    },
  });
};