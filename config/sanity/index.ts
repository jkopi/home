import { createClient, SanityClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-11-15',
  useCdn: false,
});

export default client;
