import { HtmlAttributes } from '@stitches/react/types/css';
import Head from 'next/head';

type Props = {
  title: string;
};

// WIP
const SEO = ({ title }: Props) => {
  return (
    <Head>
      <title>JL | {title}</title>
    </Head>
  );
};

export default SEO;
