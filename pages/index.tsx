import type { NextPage } from 'next';
import Head from 'next/head';
import { ExperienceItem } from '../components/experience/ExperienceItem';
import GradientCircle from '../components/GradientCircle';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jaakko Lankila</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <GradientCircle/>
      </Layout>
    </>
  );
};

export default Home;
