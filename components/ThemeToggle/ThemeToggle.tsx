import { useContext } from 'react';
import { stitches } from '../../config/stitches.config';
import { ColorContext } from '../../context/ColorContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import Icon, { IconWrapper } from '../Icon';

const StyledToggle = stitches.styled('div');

const StyledButton = stitches.styled('button', {
  border: '0',
  borderRadius: '10px',
  backgroundColor: '$bgBody',
  cursor: 'pointer'
});

export const ThemeToggle = () => {
  const ctx = useContext(ColorContext);

  const icon =
    ctx?.theme === 'dark' ? (
      <IconWrapper size="small">
        <BsSun />
      </IconWrapper>
    ) : (
      <IconWrapper size="small">
        <BsMoon />
      </IconWrapper>
    );

  return (
    <StyledToggle>
      <StyledButton onClick={() => ctx?.toggleTheme()}>{icon}</StyledButton>
    </StyledToggle>
  );
};
