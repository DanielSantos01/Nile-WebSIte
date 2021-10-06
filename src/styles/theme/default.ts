import { DefaultTheme } from 'styled-components';

import COLORS from './colors';
import FONTS from './fonts';

const defaultTheme: DefaultTheme = {
  title: 'default',

  fonts: {
    primary: FONTS.Montserrat,
  },

  colors: {
    primary: COLORS.primary,
    secondary: COLORS.secondary,
    terciary: COLORS.terciary,
  },
};

export default defaultTheme;
