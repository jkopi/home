import { styled } from '../config/stitches.config';

export const IconWrapper = styled('span', {
  padding: '2px',
  variants: {
    size: {
      small: {
        fontSize: '26px',
      },
      medium: {
        fontSize: '34px',
      },
    },
  },
});

const LinkWrapper = styled('a', {
  textDecoration: 'none',
});

const Icon = ({ src }: { src: JSX.Element }) => {
  return <IconWrapper>{src}</IconWrapper>;
};

export default Icon;
