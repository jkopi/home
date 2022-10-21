import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { stitches } from '../config/stitches.config';
import { ColorContext } from '../context/ColorContext';
import { ColorDropdown } from './ColorDropdown';
import Text from './Text';
import { ThemeToggle } from './ThemeToggle';

const StyledNavigator = stitches.styled('header', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1em',
});

const StyledLinkContainer = stitches.styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
});

const StyledLinkWrapper = stitches.styled('span', {
  cursor: 'pointer',
  '&:hover': {
    borderBottom: '2px solid salmon',
  },
});

const asd = stitches.css({
  '&:hover': {
    textDecoration: 'underline',
  },
});

function Navigator() {
  const location = useRouter();
  const colors = useContext(ColorContext);

  return (
    <StyledNavigator>
      <StyledLinkContainer>
        <Link href="/asd">Home</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/">About me</Link>
      </StyledLinkContainer>
      <ThemeToggle />
    </StyledNavigator>
  );
}

export default Navigator;
