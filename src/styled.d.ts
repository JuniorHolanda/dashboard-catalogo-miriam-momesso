// styled.d.ts
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      body: string;
      heading: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    colors: {
      primary: string;
      secondary: string;
      third: string;
      background1: string;
      background2: string;
      background3: string;
      text1: string;
      text2: string;
    };
  }
}
