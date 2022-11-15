import { stitches } from '../config/stitches.config';
import Text from './Text';

const StyledFooter = stitches.styled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  // position: 'absolute',
  // bottom: '0',
  padding: '1em',
  '@bp3': {
    justifyContent: 'center'
  }
});

const Footer = () => {
  return (
    <StyledFooter>
      <Text size="small" weight="bold">&copy; {new Date().getFullYear()} - Jaakko Lankila</Text>
    </StyledFooter>
  );
};

export default Footer;
