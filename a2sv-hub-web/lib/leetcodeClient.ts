import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('https://leetcode.com/graphql', {
  headers: {
    'Content-Type': 'application/json',
    'Referer': 'https://leetcode.com',
    'Origin': 'https://leetcode.com',
    'User-Agent': 'Mozilla/5.0',
  },
});

export default client;
