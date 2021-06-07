import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

export default function Drawer({ isActive, setIsActive, children }) {
  return (
    <>
      <AnimatePresence>
        {isActive && (
          <>
            <DrawerContainer
              drag='y'
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(_, info) => {
                console.log(info);
                if (info.offset.y > 300) setIsActive(false);
              }}
            >
              <motion.div
                exit={{ opacity: 0.5, y: '110%' }}
                initial={{ opacity: 0.5, y: '110%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ damping: 20, type: 'spring' }}
              >
                <div className='drawer'>
                  <button className='drawer--close' onClick={() => setIsActive(false)}>
                    X
                  </button>
                  {children}
                </div>
              </motion.div>
            </DrawerContainer>
            <motion.div
              className='drawer--background'
              onClick={() => setIsActive(false)}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

const DrawerContainer = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: calc(100% - 2rem);
  bottom: 0;
  left: 0;
  z-index: 10;

  .drawer {
    height: calc(100vh + 400px);
    padding: 2em;
    margin: 2rem;
    padding-bottom: 400px;
    background: var(--black);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-radius: 2rem 2rem 0 0;
    border: 2px solid var(--yellow);
    &--close {
      color: var(--black);
      font-size: 2rem;
    }
  }
`;
