import { stitches } from '../config/stitches.config';
import Text from './Text';

const StyledFooter = stitches.styled('footer', {
  position: 'absolute',
  bottom: '0',
  marginTop: '2rem',
  marginBottom: '2rem',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Text>&copy; {new Date().getFullYear()} - Jaakko Lankila</Text>
    </StyledFooter>
  );
};

export default Footer;
