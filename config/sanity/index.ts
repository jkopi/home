import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'skeft4xc',
  dataset: 'production',
  apiVersion: '2022-11-15',
  useCdn: false,
});

export default client;
