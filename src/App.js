import "./App.css";
import { Box } from "@chakra-ui/react";
import Router from "./routes";

function App() {

  return (
    <Box h="100%" display="flex" flexDirection="column">
          <Router />
    </Box>
  );
}

export default App;
