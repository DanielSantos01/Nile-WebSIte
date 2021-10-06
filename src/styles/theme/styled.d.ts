import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    fonts: {
      primary: string;
    }

    colors: {
      primary: string;
      secondary: string;
      terciary: string;
    }
  }
}
