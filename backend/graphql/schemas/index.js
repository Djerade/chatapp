import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from '../resolvers/index.js';
import { typeDefs } from './chatschema.js';


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
