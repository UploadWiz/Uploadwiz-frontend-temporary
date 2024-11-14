import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      bg: mode("whiteAlpha.900", "backgroundDark.primary")(props),
      color: mode("black", "white")(props),
      fontFamily: "Noto Sans, sans-serif",
    },
  }),
};
