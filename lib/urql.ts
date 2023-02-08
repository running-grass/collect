import { createClient } from '@urql/core';

export const client = createClient({
  url: process.env.NEXT_PUBLIC_COLLECT_SERVER_HOST + '/api/graphql',
});