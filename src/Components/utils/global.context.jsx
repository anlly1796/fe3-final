import { createContext, useMemo } from "react";
import { useContext, useState } from "react";



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
//export const ThemeContext = createContext(themes.light);

export const ContextGlobal = createContext(themes.light);


export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {

    if (theme === themes.dark) {
      setTheme(themes.light)
    }
    if (theme === themes.light) {

      setTheme(themes.dark)
    }
  }
  const providerValue = useMemo(() => ({
    theme,
    handleChangeTheme
  }), [theme, handleChangeTheme])



  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo





  return (
    <ContextGlobal.Provider value={providerValue}>

      <div style={{ background: theme.background, color: theme.font }}>
        {children}
      </div>


    </ContextGlobal.Provider>
  );
};
