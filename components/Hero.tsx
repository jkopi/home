import { styled } from '../config/stitches.config';
import Icon, { IconWrapper } from './Icon';
import Text from './Text';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Container = styled('div', {
  padding: '1em',
  borderBottom: '3px solid springgreen',
});

const SocialsBox = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  marginTop: '10px',
});

const Button = styled('button', {
  color: '$gray500',
  backgroundColor: 'AntiqueWhite',
});

function Hero() {
  return (
    <Container>
      <h1>Hey there! &#128075;</h1>
      <Text>My name is Jaakko Lankila and I'm a young motivated software developer in the beginning of my career</Text>
      <SocialsBox>
        <IconWrapper size="small">
          <a href="https://github.com">
            <BsGithub />
          </a>
        </IconWrapper>
        <IconWrapper size="small">
          <a href="https://github.com">
            <BsLinkedin />
          </a>
        </IconWrapper>
      </SocialsBox>
    </Container>
  );
}

export default Hero;
