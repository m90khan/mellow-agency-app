import { GlobalProvider } from '../utils/globalContext';
import { AnimateSharedLayout } from 'framer-motion';

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
  return (
    <GlobalProvider>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </GlobalProvider>
  );
}

export default MyApp;
