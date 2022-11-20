import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ColorProvider } from '../context/ColorContext';
import { globalStyles } from '../config/stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  );
}

export default MyApp;
