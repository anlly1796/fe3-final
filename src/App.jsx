
import { Outlet, useParams } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useState, useMemo } from "react";
import { ContextProvider, themes } from "./Components/utils/global.context"
import { ThemeContext } from './Components/utils/global.context'



function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  }
  const providerValue = useMemo(()=>({theme,
    handleChangeTheme}),[theme,handleChangeTheme])

  return (
    <div className="App">
      <ThemeContext.Provider value={providerValue}>
      <ContextProvider>
      <Navbar />

      <Outlet />
      <Footer />
      </ContextProvider> 
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
