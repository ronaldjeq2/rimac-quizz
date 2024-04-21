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
      height: 65,
      justifyContent: 'center',
      paddingHorizontal: resizeDimention({width, scale: 4}),
      borderWidth: 1,
      paddingVertical: 0,
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
      paddingHorizontal: 0,
    },
    cellPhoneFieldStyle: {
      flex: 1,
      borderRadius: 10,
      marginVertical: 20,
    },
    termsAndConditionsStyleText: {
      fontSize: 16,
      marginVertical: 10,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    buttonStyle: {
      backgroundColor: COLORS.BLACK,
      height: 60,
      borderRadius: 30,
      marginVertical: 20,
    },
    titleStyle: {color: COLORS.WHITE, fontSize: 20, fontWeight: 'bold'},
  });
};
