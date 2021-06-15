import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';

//Define Conext
const GlobalStateContext = createContext({
  currentTheme: 'dark',
  currentLanguage: '',
});
const GlobalDispatchContext = createContext(null);

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    case 'TOGGLE_LANGUAGE': {
      return {
        ...state,
        currentLanguage: action.language,
      };
    }
    // case 'CURSOR_TYPE': {
    //   return {
    //     ...state,
    //     cursorType: action.cursorType,
    //   };
    // }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//Provider

export const GlobalProvider = ({ children }) => {
  // const [currentTheme, setCurrentTheme] = useState('dark');
  // useEffect(() => {
  //   setCurrentTheme(
  //     window.localStorage.getItem('theme') == null
  //       ? 'dark'
  //       : window.localStorage.getItem('theme')
  //   );
  // }, [currentTheme]);
  // const [state, dispatch] = useReducer(globalReducer, {
  //   currentTheme: currentTheme,
  //   cursorType: false,
  //   cursorStyles: ['pointer', 'hovered', 'locked', 'white'],
  // });
  const [initialState, setInitialState] = useState({
    currentTheme: 'dark',
    currentLanguage: '',
  });
  const [state, dispatch] = useReducer(globalReducer, initialState);
  useEffect(() => {
    setInitialState({
      currentTheme:
        window?.localStorage.getItem('theme') == null
          ? 'dark'
          : window?.localStorage.getItem('theme'),
      currentLanguage: '',
      // cursorType: false,
      // cursorStyles: ['pointer', 'hovered', 'locked', 'white'],
    });
  }, [state, dispatch]);
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
