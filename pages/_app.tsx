import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useGlobalStateContext } from '../utils/globalContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const { cursorStyles, currentTheme } = useGlobalStateContext();

  const router = useRouter();
  const darkTheme = {
    background: '#000',
    text: '#fff',
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
  };
  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />

      <AnimatePresence>
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
  );
}

export default MyApp;
