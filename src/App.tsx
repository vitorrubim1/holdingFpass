import { ChakraProvider } from "@chakra-ui/react";

import { MarvelProvider } from "./hooks/marvel";
import Routes from "./routes";

import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MarvelProvider>
        <Routes />
      </MarvelProvider>
    </ChakraProvider>
  );
}

export default App;
