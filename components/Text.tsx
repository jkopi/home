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
      bold: {
        fontWeight: 900,
      },
    },
    size: {
      small: {
        fontSize: '$3'
      }
    }
  },
});

export default Text;