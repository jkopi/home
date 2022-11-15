import React, { useContext } from 'react';
import { darkTheme, stitches } from '../config/stitches.config';
import { ColorContext } from '../context/ColorContext';
import Footer from './Footer';
import Navigator from './Navigator';

const StyledLayout = stitches.styled('div', {
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '$bgBody',
  // display: 'flex',
  // flexDirection: 'column',
});

const StyledChildren = stitches.styled('main', {
  margin: '0 auto',
  '@bp4': {
    width: '70%',
    justifyItems: 'center',
  },
});

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const ctx = useContext(ColorContext);

  return (
    <StyledLayout className={ctx?.theme === 'dark' ? darkTheme : 'light'}>
      <StyledChildren>
        <Navigator />
        {children}
      </StyledChildren>
    </StyledLayout>
  );
};

export default Layout;
