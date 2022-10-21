import { useContext } from 'react';
import { stitches } from '../../config/stitches.config';
import { ColorContext } from '../../context/ColorContext';

const StyledToggle = stitches.styled('div');

export const ThemeToggle = () => {
  const colorContext = useContext(ColorContext);

  return (
    <StyledToggle>
      <p>{colorContext?.hexColorBg}</p>
    </StyledToggle>
  );
};
