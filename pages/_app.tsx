import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider, DefaultTheme } from 'styled-components';
const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
