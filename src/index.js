import { ColorModeScript } from "@chakra-ui/color-mode";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import theme from "./themes/index";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <BrowserRouter>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
