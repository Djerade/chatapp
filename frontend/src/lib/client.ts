'use client';
import { ApolloLink, HttpLink } from '@apollo/client';
import * as dotenv from 'dotenv';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr';

dotenv.config();

function client() {
  const httpLink = new HttpLink({
    uri: process.env.URL || 'http://localhost:5000/graphql',
    fetchOptions: { cache: 'no-store' }
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            httpLink
          ])
        : httpLink,
    ssrMode: true
  });
}

export default client;
