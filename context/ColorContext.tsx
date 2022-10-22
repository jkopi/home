import React, { createContext, useState } from 'react';
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

const ColorProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [customThemeColors, setCustomThemeColors] = useState<CustomThemeColors>({
    backGround: '#fff',
    foreGround: '#08192e',
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const setCustomThemeBg = () => {
    const color = randomColor();
    setCustomThemeColors({ ...customThemeColors, backGround: color });
  };

  const setCustomThemeFg = () => {
    const color = randomColor();
    setCustomThemeColors({ ...customThemeColors, foreGround: color });
  };

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
