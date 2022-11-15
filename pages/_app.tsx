import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ColorProvider } from '../context/ColorContext';
import { stitches, globalStyles } from '../config/stitches.config';

const StyledWrapper = stitches.styled('div');

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ColorProvider>
      <StyledWrapper>
        <Component {...pageProps} />
      </StyledWrapper>
    </ColorProvider>
  );
}

export default MyApp;
