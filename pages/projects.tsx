import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ProjectCard } from '../components/Projects';
import Text from '../components/Text';
import client from '../config/sanity';
import { stitches } from '../config/stitches.config';

const Container = stitches.styled('div', {
  padding: '1em',
});

const ProjectGrid = stitches.styled('section', {
  display: 'grid',
  gap: '1em',
  marginTop: '4em',
  // paddingTop: '2em',
  '@bp3': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@bp4': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
});

export type TProject = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  date: Date;
  description: any;
  link: string;
  name: string;
  publicity: string;
  technologies: string[];
};

type Props = {
  data: TProject[];
};

const Projects: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Jaakko Lankila | Projects</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <Text as="h1" size="h1">
            Projects
          </Text>
          <ProjectGrid>
            {data &&
              data
                .sort((a, b) => new Date(b.date).getFullYear() - new Date(a.date).getFullYear())
                .map((project) => <ProjectCard data={project} />)}
          </ProjectGrid>
        </Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projectData = await client.fetch<TProject[]>(`*[_type == "projects"]`);
  console.log(projectData);
  return {
    props: {
      data: projectData,
    },
  };
};

export default Projects;
