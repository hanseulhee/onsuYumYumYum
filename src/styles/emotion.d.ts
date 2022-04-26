import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      fullWhite: string;
      white: string;
      black: string;
      yellow: string;
      grey: string;
    };
    fontWeight: {
      light: number;
      normal: number;
      bold: number;
    };
    mediaQuery: {
      tablet: string;
      mobile: string;
    };
  }
}