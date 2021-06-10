import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalProvider, useGlobalStateContext } from '../utils/globalContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

function MyApp({ Component, pageProps }) {
  const { currentTheme } = useGlobalStateContext();

  const router = useRouter();
  const darkTheme: DefaultTheme = {
    background: '#000',
    text: '#fff',
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
  };
  const containerRef = useRef(null);
  return (
    <GlobalProvider>
      <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />

        <AnimatePresence>
          {/* ...your app */}
          <motion.main
            key={router.pathname}
            variants={variants}
            initial='initial'
            animate='enter'
            exit='exit'
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
