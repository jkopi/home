import { MotionProps, Variants } from 'framer-motion';

const transitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -1,
  },
};

export { transitionVariants }