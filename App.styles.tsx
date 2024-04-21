import {StyleSheet} from 'react-native';
import {resizeDimention} from './src/utils/dimensions';

interface IAppStyles {
  width: number;
}

export const AppStyles = ({width}: IAppStyles) => {
  return StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      paddingHorizontal: resizeDimention({width, scale: 6}),
    },
  });
};
