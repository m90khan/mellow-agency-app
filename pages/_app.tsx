import { GlobalProvider, useGlobalStateContext } from '../utils/globalContext';
import { AnimateSharedLayout } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
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
        {/* <motion.main
          key={router.pathname}
          variants={variants}
          initial='initial'
          animate='enter'
          exit='exit'
        > */}
        <Component {...pageProps} />
        {/* </motion.main> */}
      </AnimateSharedLayout>
    </GlobalProvider>
  );
}

export default MyApp;
