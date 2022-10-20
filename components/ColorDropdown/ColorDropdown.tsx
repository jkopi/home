import { useState } from 'react';
import { styled } from '../../config/stitches.config';
import GradientCircle from '../GradientCircle';

const StyledDropdownButton = styled('span', {
  position: 'relative',
  padding: '10px',
  border: '1px solid #08192e',
  borderRadius: '15%',
  cursor: 'pointer',
});

const StyledDropdownContent = styled('div', {
  width: '200px',
  position: 'absolute',
  marginTop: '10px',
  border: '1px solid #08192e',
  zIndex: 9999,
  transition: 'all .5s ease',
});

export const ColorDropdown = () => {
  // manage dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      <StyledDropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <GradientCircle />
      </StyledDropdownButton>
      {isDropdownOpen && (
        <StyledDropdownContent>
          <p>it is!</p>
        </StyledDropdownContent>
      )}
    </div>
  );
};
