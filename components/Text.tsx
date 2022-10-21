import { stitches } from '../config/stitches.config';

const Text = stitches.styled('p', {
  fontFamily: '$inter',
  fontSize: '1.2rem',
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
  },
});

export default Text;