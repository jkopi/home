import React, { createContext, useEffect, useState } from 'react';
const randomColor = require('random-hex-color');

type ProviderProps = {
  children: React.ReactNode;
};

type ContextProps = {
  hexColorBg: string;
  hexColorFg: string;
  theme: string;
  changeBgColor: () => void;
  changeFgColor: () => void;
  toggleTheme: () => void;
};

type CustomThemeColors = {
  backGround: string;
  foreGround: string;
};

export const ColorContext = createContext<ContextProps | undefined>(undefined);

type ThemeModes = 'light' | 'dark'

const ColorProvider = ({ children }: ProviderProps) => {

  const [theme, setTheme] = useState<ThemeModes>('light');
  const [customThemeColors, setCustomThemeColors] = useState<CustomThemeColors>({
    backGround: '#fff',
    foreGround: '#08192e',
  });

  const toggleTheme = () => {
    const themeInUse = theme === 'light' ? 'dark' : 'light'; 
    // check window existence for next's sake
    if (typeof window !== 'undefined') {
      setTheme(themeInUse);
      window.localStorage.setItem('theme', themeInUse)
    } else {
      setTheme(themeInUse);
    }
  };

  const setCustomThemeBg = () => {
    const color = randomColor();
    setCustomThemeColors({ ...customThemeColors, backGround: color });
  };

  const setCustomThemeFg = () => {
    const color = randomColor();
    setCustomThemeColors({ ...customThemeColors, foreGround: color });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storedThemeValue = window.localStorage.getItem('theme');
      let themeToken = storedThemeValue as ThemeModes;
      setTheme(themeToken);
    }
  }, [setTheme])

  return (
    <ColorContext.Provider
      value={{
        theme: theme,
        hexColorBg: customThemeColors.backGround,
        hexColorFg: customThemeColors.foreGround,
        changeBgColor: setCustomThemeBg,
        changeFgColor: setCustomThemeFg,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider };
