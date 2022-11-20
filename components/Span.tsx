import { stitches } from '../config/stitches.config';

const Span = stitches.styled('span', {
  variants: {
    type: {
      badge: {
        fontSize: '$2',
        padding: '2px 8px',
        borderRadius: '3px',
        backgroundColor: '#5f9dff',
        color: 'White',
      },
    },
  },
});

export default Span;
