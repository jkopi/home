import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { ResumeSection } from '../components/Resume/ResumeSection';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import client from '../config/sanity';

export type TResume = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  company: string;
  description: any;
  endDate: string;
  role: string;
  startDate: string;
};

type Props = {
  data: TResume[];
};

const Resume: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Jaakko Lankila | Resume</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ResumeSection experienceData={data} />
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resumeData = await client.fetch<TResume[]>(`*[_type == "experience"]`);
  console.log(resumeData.map((rd) => rd.description));
  return {
    props: {
      data: resumeData,
    },
  };
};

export default Resume;
