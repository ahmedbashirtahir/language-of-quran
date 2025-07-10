
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  // Find your project ID and dataset in your sanity.json or at manage.sanity.io
  // You will need to replace these with your actual project details
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-05-01', // use a UTC date in YYYY-MM-DD format
});
