import { stitches } from '../config/stitches.config';
import Icon, { IconWrapper } from './Icon';
import Text from './Text';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { H1 } from './Heading';
import Divider from './Divider';

const Container = stitches.styled('div', {
  padding: '1em',
  marginTop: '2em',
  marginBottom: '2em'
});

const SocialsBox = stitches.styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  marginTop: '10px',
});

const Button = stitches.styled('button', {
  color: '$gray500',
  backgroundColor: 'AntiqueWhite',
});

const StyledLink = stitches.styled('a', {
  color: '$dim',
  textDecoration: 'underline',
});

function Hero() {
  return (
    <Container>
      <H1>Hey there! &#128075;</H1>
      <Text css={{ marginBottom: '2rem' }} weight="medium">This site is under construction 🚧</Text>
      <SocialsBox>
        <IconWrapper size="small">
          <a href="https://github.com/jkopi" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </IconWrapper>
        <IconWrapper size="small">
          <a href="https://www.linkedin.com/in/lankila-jaakko" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
        </IconWrapper>
      </SocialsBox>
      <Divider />
    </Container>
  );
}

export default Hero;

// <Text>
//   I'm a software developer who likes to keep constantly learning new things and progressing as a developer
// </Text>
// <Text>
//   By day I'm working{' '}
//   <StyledLink href="https://www.oamk.fi" target="_blank" rel="noreferrer">
//     @oamk
//   </StyledLink>{' '}
//   as a project designer and on my spare time I am a front-end developer working on a Legal Tech startup
// </Text>
// <Text>Interested in developing digital services and recently design systems</Text>
