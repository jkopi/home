import { stitches } from '../config/stitches.config';

const Text = stitches.styled('p', {
  fontFamily: '$inter',
  fontSize: '1.2rem',
  color: '$text',
  variants: {
    color: {
      dim: {
        color: '$dim',
      },
    },
    weight: {
      medium: {
        fontWeight: 500,
      },
      semiBold: {
        fontWeight: 700,
      },
      bold: {
        fontWeight: 900,
      },
    },
    size: {
      small: {
        fontSize: '$3',
      },
      medium: {
        fontSize: '$4',
      },
      large: {
        fontSize: '$5',
      },
      xlarge: {
        fontSize: '$6'
      },
      h1: {
        fontSize: '$h1',
      },
      h2: {
        fontSize: '$h2',
      },
      h3: {
        fontSize: '$h3',
      }
    },
  },
});

export default Text;
