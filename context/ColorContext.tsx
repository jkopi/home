import React, { createContext, useState } from 'react';
const randomColor = require('random-hex-color');

type ProviderProps = {
  children: React.ReactNode;
};

type ContextProps = {
  hexColorBg: string;
  hexColorFg: string;
  changeBgColor: () => void;
};

export const ColorContext = createContext<ContextProps | undefined>(undefined);

const ColorProvider = ({ children }: ProviderProps) => {
  // background color
  const [hexColorBg, setHexColorBg] = useState<string>('#fff');
  // TODO: predefine set of colors
  // foreground color
  const [hexColorFg, setHexColorFg] = useState<string>('#08192e');

  const setRandomHexColorBg = () => {
    let color = randomColor();
    setHexColorBg(color);
  };

  const setRandomHexColorFg = () => {
    let color = randomColor();
    setHexColorBg(color);
  };

  return (
    <ColorContext.Provider
      value={{
        hexColorBg: hexColorBg,
        hexColorFg: hexColorFg,
        changeBgColor: setRandomHexColorBg,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider };
