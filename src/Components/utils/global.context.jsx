import { createContext, useContext } from "react";



export const initialState = { theme: "", data: [] }
export const themes = {
  light: {
    font: 'black',
    background: 'white'
  },
  dark: {
    font: 'white',
    background: 'black'
  }
};
export const ThemeContext = createContext(themes.light);

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {


  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const { theme } = useContext(ThemeContext);




  return (
    <ContextGlobal.Provider value={theme}>
      <div style={{ background: theme.background, color: theme.font }}>
        {children}
      </div>
    </ContextGlobal.Provider>
  );
};
