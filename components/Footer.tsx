import { stitches } from '../config/stitches.config';
import Text from './Text';

const StyledFooter = stitches.styled('footer', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  backgroundColor: '$bgBody',
  padding: '1em',
  '@bp3': {
    justifyContent: 'center'
  }
});

type Props = Pick<React.HTMLProps<HTMLElement>, "className">;

const Footer = ({ className }: Props) => {
  return (
    <StyledFooter className={className}>
      <Text size="small" weight="bold">&copy; {new Date().getFullYear()} - Jaakko Lankila</Text>
    </StyledFooter>
  );
};

export default Footer;
