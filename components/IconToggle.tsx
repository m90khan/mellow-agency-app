import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlobalDispatchContext, useGlobalStateContext } from '../utils/globalContext';

const variants = {
  initial: { opacity: 0, scale: 0.5, y: 100, rotate: -90 },
  animate: { opacity: 1, scale: 1, y: 0, rotate: 0 },
  exit: { opacity: 0, scale: 0.5, x: 100, rotate: 90 },
};

const AnimatedIcon = ({ iconKey, children }) => (
  <motion.div
    key={iconKey}
    variants={variants}
    initial='initial'
    animate='animate'
    exit='exit'
  >
    {children}
  </motion.div>
);

export const IconButton = styled.button`
  cursor: pointer;
  font: inherit;
  width: auto;
  height: auto;
  border: 0;
  background: transparent;
  padding: 10px;
  z-index: 1000;
  margin: 0;
  &:hover {
    background: none;
  }
`;

const IconToggle = ({ toggleMenu }) => {
  const { currentTheme, currentLanguage } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const ariaLabel =
    currentTheme === 'dark' ? 'Activate dark mode' : 'Activate light mode';
  const iconSize = '2rem';
  const iconColor =
    currentTheme === 'dark'
      ? `${toggleMenu ? 'var(--black)' : 'var(--yellow)'}`
      : 'var(--black)';

  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
  };

  const toggleLanguage = () => {
    if (currentLanguage === 'english') {
      dispatch({ type: 'TOGGLE_LANGUAGE', language: 'german' });
    } else {
      dispatch({ type: 'TOGGLE_LANGUAGE', language: 'english' });
    }
  };

  const languageText = currentLanguage === 'english' ? 'DE' : 'EN';

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (theme == 'undefined') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <>
      <AnimatePresence initial={false}>
        <LanguageBtn
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          onClick={toggleLanguage}
        >
          {languageText}
        </LanguageBtn>
        <IconButton onClick={toggleTheme}>
          {currentTheme === 'light' ? (
            <AnimatedIcon iconKey='sun'>
              <FiSun size={iconSize} color={iconColor} />
            </AnimatedIcon>
          ) : (
            <AnimatedIcon iconKey='moon'>
              <FiMoon size={iconSize} color={iconColor} />
            </AnimatedIcon>
          )}
        </IconButton>
      </AnimatePresence>
    </>
  );
};

export default IconToggle;

const LanguageBtn = styled(motion.h2)`
  padding: 0.5rem 1.2rem;
  background-color: ${(props) => props.theme.bigText};
  position: fixed;
  font-size: 2rem;
  top: 45%;
  cursor: pointer;
  color: ${(props) => props.theme.background};
  right: 0;
  z-index: 200;
`;
