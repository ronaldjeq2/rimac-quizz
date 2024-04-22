import {StyleSheet} from 'react-native';
import {resizeDimention} from '../utils/dimensions';
import {COLORS} from '../constants/colors.constants';

interface IPlanItemComponentStyles {
  width: number;
}

export const PlanItemComponentStyles = ({width}: IPlanItemComponentStyles) => {
  return StyleSheet.create({
    principalContainer: {
      width: width,
      height: 450,
      paddingHorizontal: resizeDimention({width, scale: 6}),
      position: 'relative',
    },
    secondContainer: {
      height: '100%',
      borderRadius: 10,
      width: resizeDimention({width, scale: 70}),
      paddingVertical: 15,
      paddingHorizontal: resizeDimention({width, scale: 6}),
      zIndex: 2,
      elevation: 2,
      shadowOpacity: 1,
      backgroundColor: COLORS.WHITE,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 13,
    },
    titleText: {fontSize: 25, fontWeight: 'bold'},
    priceText: {fontWeight: 'bold', marginBottom: 3},
    disccountText: {fontSize: 15, fontWeight: 'bold'},
    descriptionContainer: {
      backgroundColor: COLORS.LIGHT_GRAY,
      height: 2,
      width: '100%',
      marginVertical: 10,
    },
    descriptionInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 5,
      marginVertical: 10,
    },
    containerTextDescription: {flex: 1},
    descriptionText: {
      fontSize: 16,
      paddingHorizontal: 5,
    },
    buttonContainer: {
      borderRadius: 20,
      marginVertical: 10,
      backgroundColor: COLORS.PINK,
    },
    titleButtonText: {color: COLORS.WHITE},
  });
};
