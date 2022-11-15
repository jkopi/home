import { stitches } from '../config/stitches.config'

const Unorderedlist = stitches.styled('ul', {
  color: '$text',
  fontSize: '1.2rem',
  fontFamily: '$inter',
  'li::marker': {
    color: '#5f9dff',
    lineHeight: '1'
  },
});

export default Unorderedlist;