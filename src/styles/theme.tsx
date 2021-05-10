import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#111111",
      "800": "#0D0D0D",
      "700": "#181B23",
      "600": "#353646",
      "500": "#4B4D63",
      "400": "#616480",
      "300": "#797D9A",
      "200": "#9699B0",
      "100": "#B3B5C6",
      "50": "#F2F2F2",
    },
  },

  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
});
