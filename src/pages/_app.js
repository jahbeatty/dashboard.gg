import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import theme from "../theme";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
