import React, {useState} from "react";
import {themes} from "../constants/theme.js";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
