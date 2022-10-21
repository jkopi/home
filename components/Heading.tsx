import { stitches } from '../config/stitches.config';

const baseHeading = stitches.css({
  fontFamily: '$inter',
  variants: {
    size: {
      1: { fontSize: '$h1' },
    },
  },
});

const H1 = stitches.styled('h1', baseHeading, {
  defaultVariants: {
    size: 1,
  },
});

export { H1 };
