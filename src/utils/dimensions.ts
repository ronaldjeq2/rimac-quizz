import {DIMENSIONS} from '../constants/dimension.constants';

interface IresizeDimention {
  width: number;
  scale: number;
}

export const resizeDimention = ({width, scale}: IresizeDimention): number => {
  return (width * scale) / DIMENSIONS.scale;
};
