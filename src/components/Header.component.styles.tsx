import {StyleSheet} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
import {COLORS} from '../constants/colors.constants';

interface IHeaderComponentStyles {
  width: number;
}

export const HeaderComponentStyles = ({width}: IHeaderComponentStyles) => {
  return StyleSheet.create({
    headerContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      marginVertical: 10,
    },
    itemContainer: {
      flex: 1,
    },
    itemContainerRight: {
      flex: 1,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    phoneText: {fontSize: 14, fontWeight: 'bold'},
  });
};
