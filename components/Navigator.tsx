import { useRouter } from 'next/router';
import { stitches } from '../config/stitches.config';
import Text from './Text';
import { ThemeToggle } from './ThemeToggle';

const StyledNavigator = stitches.styled('header', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'center',
  padding: '1em',
  '@bp4': {
    width: '70%',
  },
});

const StyledLinkContainer = stitches.styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
});

const StyledLink = stitches.styled('a', {
  fontWeight: 'bold',
  height: 'fit-content',
  cursor: 'pointer',

  '&:hover': {
    color: '$text',
    textDecoration: 'underline',
    textDecorationColor: '$text',
    textDecorationThickness: '2px',
    textUnderlineOffset: '6px',
  },

  variants: {
    styling: {
      active: {
        textDecoration: 'underline',
        textDecorationColor: '$text',
        textDecorationThickness: '2px',
        textUnderlineOffset: '6px',
      },
    },
  },
});

function Navigator() {
  const location = useRouter();
  console.log(location.route);

  const goTo = (path: string) => {
    return location.push(path)
  }

  return (
    <StyledNavigator>
      <StyledLinkContainer>
        <StyledLink onClick={() => goTo('/')} styling={location.asPath === '/' ? 'active' : undefined}>
          <Text size="small">Home</Text>
        </StyledLink>
        <StyledLink onClick={() => goTo('/resume')} styling={location.asPath === '/resume' ? 'active' : undefined}>
          <Text size="small">Resume</Text>
        </StyledLink>
        <StyledLink onClick={() => goTo('/projects')} styling={location.asPath === '/projects' ? 'active' : undefined}>
          <Text size="small">Projects</Text>
        </StyledLink>
        <StyledLink onClick={() => goTo('/about')} styling={location.asPath === '/about' ? 'active' : undefined}>
          <Text size="small">About me</Text>
        </StyledLink>
      </StyledLinkContainer>
      <ThemeToggle />
    </StyledNavigator>
  );
}

export default Navigator;
