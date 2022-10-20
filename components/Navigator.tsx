import Link from 'next/link';
import { useContext } from 'react';
import { styled } from '../config/stitches.config';
import { ColorContext } from '../context/ColorContext';
import { ColorDropdown } from './ColorDropdown';

const StyledNavigator = styled('header', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1em'
});

function Navigator() {
  const colors = useContext(ColorContext);

  return (
    <StyledNavigator>
      <Link href="/" className="text-white">
        Home
      </Link>
      <Link href="/" className="text-white">
        Resume
      </Link>
      <Link href="/" className="text-white">
        About me
      </Link>
      <button onClick={() => colors?.changeBgColor()}>randomize</button>
      <ColorDropdown />
    </StyledNavigator>
  );
}

export default Navigator;
