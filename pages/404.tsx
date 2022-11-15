import { NextPage } from 'next';
import { stitches } from '../config/stitches.config';
import Text from '../components/Text';

const NotfoundContainer = stitches.styled('div', {
  height: '100vh',
  textAlign: 'center',
  verticalAlign: 'middle',
});

const NeliNollaNeli: NextPage = () => {
  return (
    <NotfoundContainer>
      <Text as="h1" size="h1" weight="bold">
        ╥﹏╥
      </Text>
      <Text>This page does not exist</Text>
    </NotfoundContainer>
  );
};

export default NeliNollaNeli;
