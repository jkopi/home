import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
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
    },
    fonts: {
      // todo add fonts
      system: 'system-ui, sans-serif',
      menlo: 'Menlo, monospace',
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
    // A property to apply linear gradient
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});
