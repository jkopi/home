import { NextPage } from 'next';
import Head from 'next/head';
import { H1 } from '../components/Heading';
import Layout from '../components/Layout';
import { stitches } from '../config/stitches.config';

const Container = stitches.styled('div', {
  padding: '1em',
});

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jaakko Lankila</title>
        <meta name="about" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <H1>About me</H1>
          <p>Under construction 🚧</p>
        </Container>
      </Layout>
    </>
  );
};

export default About;
