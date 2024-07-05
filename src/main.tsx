import { render } from "preact";
import { App } from "./app";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import "./index.css";
import NavBar from "./NavBar";

render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <NavBar/>
    <App />
      </ChakraProvider>,

  document.getElementById("app") as HTMLElement
);
