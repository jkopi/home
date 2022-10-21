import { stitches } from '../config/stitches.config';

export const IconWrapper = stitches.styled('span', {
  padding: '2px',
  '&:hover': {
    color: '$dim',
    transition: 'color .1s ease',
  },
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

const Icon = ({ children }: { children: JSX.Element }) => {
  return <IconWrapper>{children}</IconWrapper>;
};

export default Icon;
