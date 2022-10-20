import { styled } from '../config/stitches.config';

const Text = styled('p', {
  // fontFamily: '$system',
  variants: {
    color: {
      dim: {
        color: '$dim'
      }
    },
    weight: {
      bold: {
        fontWeight: 900
      }
    }
  }
});

export default Text;