import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, useColorModeValue } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  menuAnatomy.keys
);

const BaseStyle = () => {
  
    const bgColor = useColorModeValue("backgroundLight.secondary", "backgroundDark.secondary");
    const hoverColor = useColorModeValue("backgroundLight.tertiary", "backgroundDark.tertiary");
    const textColor = useColorModeValue("#000000", "#ADADAD");
  
    return definePartsStyle({
      list: {
        py: "4",
        borderRadius: "xl",
        border: "none",
        bg: bgColor,
      },
      item: {
        color: textColor,
        _hover: {
          bg: hoverColor,
        },
      },
    });
  };

export const menuTheme = defineMultiStyleConfig({ BaseStyle });
