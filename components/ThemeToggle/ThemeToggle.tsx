import { useContext } from 'react';
import { stitches } from '../../config/stitches.config';
import { ColorContext } from '../../context/ColorContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import Icon, { IconWrapper } from '../Icon';

const StyledToggle = stitches.styled('div');

const StyledButton = stitches.styled('button', {
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: '$bgBody',
});

export const ThemeToggle = () => {
  const ctx = useContext(ColorContext);

  const icon =
    ctx?.theme === 'dark' ? (
      <IconWrapper size="xSmall">
        <BsSun />
      </IconWrapper>
    ) : (
      <IconWrapper size="xSmall">
        <BsMoon />
      </IconWrapper>
    );

  return (
    <StyledToggle>
      <StyledButton onClick={() => ctx?.toggleTheme()}>{icon}</StyledButton>
    </StyledToggle>
  );
};
