import { NextPage } from 'next';
import Head from 'next/head';
import { ExperienceItem } from '../components/experience/ExperienceItem';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jaakko Lankila | Resume</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/* <Hero /> */}
        <ExperienceItem />
      </Layout>
    </>
  );
};

export default Resume;
