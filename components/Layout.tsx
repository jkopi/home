import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { transitionVariants } from '../config/motion';
import { darkTheme, stitches } from '../config/stitches.config';
import { ColorContext } from '../context/ColorContext';
import Footer from './Footer';
import Navigator from './Navigator';

const StyledLayout = stitches.styled('div', {
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '$bgBody',
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
});

const StyledMain = stitches.styled(motion.main, {
  width: '100%',
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
  const router = useRouter();

  return (
    <>
      <StyledLayout className={ctx?.theme === 'dark' ? darkTheme : 'light'}>
        <Navigator />
        <StyledMain
          key={router.asPath}
          variants={transitionVariants}
          animate="animate"
          transition={{ ease: 'anticipate' }}
          initial="initial"
          exit="exit"
        >
          {children}
        </StyledMain>
      </StyledLayout>
      <Footer className={ctx?.theme === 'dark' ? darkTheme : 'light'} />
    </>
  );
};

export default Layout;
