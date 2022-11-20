import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Text from '../components/Text';
import { stitches } from '../config/stitches.config';

const Container = stitches.styled('div', {
  padding: '1em',
});

type Props = {
  data: any;
};

const About: NextPage<Props> = ({ data }: Props) => {
  console.log({ data });
  return (
    <>
      <Head>
        <title>Jaakko Lankila</title>
        <meta name="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <Text as="h1" size="h1">About me</Text>
          <Text size="medium">Under construction 🚧</Text>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      data: { foo: 'bar' },
    },
  };
};

export default About;
