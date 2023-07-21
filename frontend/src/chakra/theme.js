import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#B6D193",
      200: "#FFFDCB",
    },
  },
  fonts: {
    body: "Bellefair, serif ",
  },
  styles: {
    global: () => ({
      body: {
        bg: "brand.200",
      },
    }),
  },
});

export default theme;
