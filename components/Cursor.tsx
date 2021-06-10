import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useGlobalStateContext } from '../utils/globalContext';

const Cursor = ({ toggleMenu, setToggleMenu }) => {
  const { cursorType } = useGlobalStateContext();
  const cursor = useRef(null);

  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
  return (
    <>
      <CursorContainer
        className={`${!!cursorType ? 'hovered' : ''} ${cursorType} ${
          toggleMenu ? 'nav-open' : ''
        }`}
        ref={cursor}
      />
    </>
  );
};

export default Cursor;

const CursorContainer = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  width: 20px;
  height: 20px;
  background: #ffff5511;
  border: 5px solid #fffe55;
  padding: 1.2rem;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    border: 4px solid ${(props) => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid #fffe55;
    border: 4px solid #fffe55;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    border: 4px solid ${(props) => props.theme.text} !important;
  }
  &.nav-open {
    background: ${(props) => props.theme.text};
  }

  &.nav-open,
  &.locked {
    border: 4px solid ${(props) => props.theme.text} !important;
  }
`;
