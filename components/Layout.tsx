import React, { useContext } from 'react';
import { darkTheme, stitches } from '../config/stitches.config';
import { ColorContext } from '../context/ColorContext';
import Footer from './Footer';
import Navigator from './Navigator';

const StyledLayout = stitches.styled('div', {
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '$bgBody',
});

const StyledChildren = stitches.styled('main', {
  margin: '0 auto',
  '@bp3': {
    width: '60%',
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
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
