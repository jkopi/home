import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useContext, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ColorContext, ColorProvider } from '../context/ColorContext';
import { styled } from '../config/stitches.config';

const StyledWrapper = styled('div');

function StyleWrapper({ children }: { children: JSX.Element }) {
  const colors = useContext(ColorContext);
  return (
    <StyledWrapper
      css={{
        backgroundColor: colors?.hexColorBg,
        color: colors?.hexColorFg,
        transition: 'background-color ease-in .3s',
      }}
    >
      {children}
    </StyledWrapper>
  );
}

function AppWrapper({ children }: { children: JSX.Element }) {
  // provide global color state for children
  return (
    <ColorProvider>
      <StyleWrapper>{children}</StyleWrapper>
    </ColorProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
