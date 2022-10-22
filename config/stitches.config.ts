import { createStitches } from '@stitches/react';

const stitches = createStitches({
  theme: {
    colors: {
      text: '#08192e',
      bgBody: '#fff',

      black: '#28282B',
      dim: '#313136',
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px',
      h1: '3rem',
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

const darkTheme = stitches.createTheme('dark' ,{
  colors: {
    text: '#fff',
    bgBody: '#08192e',
  },
});

const globalStyles = stitches.globalCss({
  html: {
    backgroundColor: '$bgBody'
  },
  // body: {
  //   color: '$text',
  //   backgroundColor: '$bgBody',
  //   transition: 'all .2s ease',
  // },
  '@import': ["url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap')"],
});

export { stitches, darkTheme, globalStyles };
