import {StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors.constants';
import {resizeDimention} from '../utils/dimensions';

interface IPlanUsedDetailsScreenStyles {
  width: number;
}

export const PlanUsedDetailsScreenStyles = ({
  width,
}: IPlanUsedDetailsScreenStyles) => {
  return StyleSheet.create({
    safeAreaView: {
      backgroundColor: COLORS.LIGHT_WHITE,
      flex: 1,
      paddingHorizontal: resizeDimention({width, scale: 6}),
    },
    headerText:{
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    cardContainer: {
      paddingHorizontal: resizeDimention({width, scale: 10}),
      zIndex: 2,
      elevation: 2,
      shadowOpacity: 1,
      backgroundColor: COLORS.WHITE,
      paddingVertical: 10,
      borderRadius: 15,
    },
    subtitle: {fontWeight: 'bold', marginVertical: 10},
    userNameInfoContainer: {flexDirection: 'row', gap: 10},
    nameStyle: {fontSize: 16, fontWeight: 'bold'},
    spacer: {
      width: '100%',
      height: 1,
      backgroundColor: COLORS.BLACK_GRAY,
      marginVertical: 20,
    },
    adinitionalInfoContainer: {gap: 10, marginVertical: 20},
    aditionalSubtitle: {fontSize: 14, fontWeight: 'bold'},
  });
};
