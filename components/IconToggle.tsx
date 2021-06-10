import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlobalDispatchContext, useGlobalStateContext } from '../utils/globalContext';

const variants = {
  initial: { opacity: 0, scale: 0.5, x: 0, rotate: -90 },
  animate: { opacity: 1, scale: 1, x: 0, rotate: 0 },
  exit: { opacity: 0, scale: 0.5, x: 0, rotate: 90 },
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
  margin: 0;
  &:hover {
    background: none;
  }
`;

const IconToggle = () => {
  const { currentTheme } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const [isLightMode, setIsLightMode] = useState(true);
  const ariaLabel =
    currentTheme === 'dark' ? 'Activate dark mode' : 'Activate light mode';
  const iconSize = '2rem';
  const iconColor = '#fffe55';
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
    }
  };

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <>
      <AnimatePresence initial={false}>
        <IconButton aria-label={ariaLabel} onClick={toggleTheme}>
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
