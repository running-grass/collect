import { createClient } from '@urql/core';

export const client = createClient({
  url: process.env.COLLECT_SERVER_HOST + '/api/graphql',
});