import { PortableTextComponents } from '@portabletext/react';
import Text from '../../components/Text';
import Unorderedlist from '../../components/UnorderedList';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => {
      return <Text>{children}</Text>;
    },
  },
  list: {
    bullet: ({ children }) => <Unorderedlist>{children}</Unorderedlist>,
  },
};

export default components;
