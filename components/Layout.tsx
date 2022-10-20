import React from 'react';
import { styled } from '../config/stitches.config';
import Footer from './Footer';
import Navigator from './Navigator';

const StyledLayout = styled('div', {
  width: '100%',
  margin: '0 auto',

  '@bp3': {
    width: '60%',
    justifyItems: 'center',
  },
});

type Props = {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <StyledLayout>
      <Navigator/>
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
}

export default Layout;