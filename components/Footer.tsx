import { styled } from '../config/stitches.config';

const StyledFooter = styled('footer', {
  position: 'absolute',
  bottom: '0',
  marginTop: '2rem',
  marginBottom: '2rem'
});

const Footer = () => {
  return <StyledFooter>&copy; {new Date().getFullYear()} - Jaakko Lankila</StyledFooter>;
};

export default Footer;
