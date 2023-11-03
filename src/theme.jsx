import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

export const customTheme = deepMerge(grommet, {
  global: {
    colors: {
        brand: '#95d488',
        dbrand: '#95d481',
        bg: '#212121',
        dbg: '#0E0E0E',
        wh: '#fefefe'
    },
    font: {
      family: "Montserrat",
      size: "18px",
      height: "20px",
    },
    breakpoints: {
      xsmall: {
        value: 400
      }
    }
  },
  heading: {
    extend: () => `margin-top: 12px; margin-bottom: 12px;`
  },
  paragraph: {
    extend: () => `font-weight: 300; margin-top: 0;`,
    xxlarge: {
      size: "28px"
    }
  },
  textInput: {
    placeholder: {
      extend: () => `color: #fefefe`
    }
  }
});
