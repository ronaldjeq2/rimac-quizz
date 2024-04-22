export const COLORS = {
  TRANSPARENT: 'transparent',
  WHITE: 'white',
  LIGHT_GREEN: '#01fe86',
  LIGHT_GRAY: '#d1d6f0',
  BLACK: '#03050f',
  BLACK_GRAY: '#5a5c64',
  GRAY_BLUE: '#7df7f1',
  LIGHT_BLUE: '#cbf8fa',
  GRAY_PURPLE: '#e4afff',
  LIGHT_PURPLE: '#edd2ff',
  LIGHT_GRAY_PURPLE: '#2B304E',
  RED: 'red',
  STATUS_GRAY: '#4f4fff',
  STATUS_LIGHT: '#d7dbf5',
  LIGHT_WHITE: '#fafbff',
  PINK: '#ff1c44',
} as const;

export const GRADIENTS = {
  PRINCIPAL: [
    {offset: '49%', color: COLORS.GRAY_BLUE, opacity: '1'},
    {offset: '67%', color: COLORS.LIGHT_BLUE, opacity: '1'},
    {offset: '100%', color: COLORS.WHITE, opacity: '1'},
  ],
  SECONDARY: [
    {offset: '49%', color: '#e4afff', opacity: '1'},
    {offset: '67%', color: '#edd2ff', opacity: '1'},
    {offset: '100%', color: COLORS.WHITE, opacity: '1'},
  ],
};
