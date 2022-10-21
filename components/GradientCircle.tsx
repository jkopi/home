import { useContext } from 'react';
import { stitches } from '../config/stitches.config';
import { ColorContext } from '../context/ColorContext';

const GradientCircle = () => {
  const ctx = useContext(ColorContext);

  const Gradient = stitches.styled('span', {
    linearGradient: `19deg, #08192e 0%, ${ctx?.hexColorBg} 100%`,
    height: '25px',
    width: '25px',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'all ease-in 2s',
  });

  return <Gradient />;
};

export default GradientCircle;
