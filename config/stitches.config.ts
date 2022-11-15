import { createStitches } from '@stitches/react';

const stitches = createStitches({
  theme: {
    colors: {
      text: '#30394f',
      bgBody: '#fff',

      black: '#28282B',
      dim: '#313136',
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    fontSizes: {
      1: 'var(--1)',
      2: 'var(--2)',
      3: 'var(--3)',
      4: 'var(--4)',
      5: 'var(--5)',
      6: 'var(--6)',
      h1: 'var(--h1)',
      h2: 'var(--h2)',
      h3: 'var(--h3)',
    },
    fonts: {
      inter: 'Inter',
      // system: 'system-ui, sans-serif',
      // menlo: 'Menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 640px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 1024px)',
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

const darkTheme = stitches.createTheme('dark', {
  colors: {
    text: '#fff',
    bgBody: '#30394f',
  },
});

const globalStyles = stitches.globalCss({
  ':root': {
    $1: '12px',
    $2: '14px',
    $3: '16px',
    $4: '20px',
    $5: '24px',
    $6: '32px',
    $h1: '3rem',
    $h2: '2.1rem',
    $h3: '1.6rem',
    '@bp1': {
      $1: '12px',
      $2: '14px',
      $3: '16px',
      $4: '20px',
      $5: '24px',
      $6: '32px',
      $h1: '2.8rem',
      $h2: '1.8rem',
    },
    '@bp2': {
      $1: '12px',
      $2: '14px',
      $3: '16px',
      $4: '20px',
      $5: '24px',
      $6: '32px',
      $h1: '2.8rem',
      $h2: '1.8rem',
      $h3: '1.6rem',
    },
    '@bp3': {
      $1: '12px',
      $2: '14px',
      $3: '16px',
      $4: '20px',
      $5: '24px',
      $6: '32px',
      $h1: '2.8rem',
      $h2: '2.1rem',
      $h3: '1.6rem',
    },
  },

  html: {
    backgroundColor: '$bgBody',
  },

  '@import': ["url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap')"],
});

export { stitches, darkTheme, globalStyles };
