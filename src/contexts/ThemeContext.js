import { createContext, useState } from "react";

import defaultStyles from "../config/styles";

const themes = {
  dark: {
    backgroundColor: defaultStyles.colors.black,
    color: defaultStyles.colors.white,
  },

  light: {
    backgroundColor: defaultStyles.colors.white,
    color: defaultStyles.colors.black,
  },
};

export const ThemeContext = createContext();

export const ThemeProvder = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
