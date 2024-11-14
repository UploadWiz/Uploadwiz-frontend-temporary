import { extendTheme } from "@chakra-ui/react";

import { styles } from "./styles";
import { menuTheme } from "./components/Menu";

const theme = extendTheme({
  components: {
    Menu: menuTheme,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    backgroundDark: {
      primary: "#212121",
      secondary: "#3D3D3D",
      tertiary: "#4F4F4F",
    },
    backgroundLight: {
      primary: "#FFFFFF",
      secondary: "#F5F5F5",
      tertiary: "#E0E0E0",
    },
    textColorDark: {
      secondary: "#ADADAD",
    },
    textColorLight: {
      primary: "#000000",
    },
  },
  styles,
  fonts: {
    brand: "Pridi",
  },
});

export default theme;
