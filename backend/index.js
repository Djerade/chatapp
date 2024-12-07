import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import mongoose from 'mongoose';
import { schema } from './graphql/schemas/index.js';
import  * as dotenv from 'dotenv'

dotenv.config()

const startServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 4000;

  // Connectez-vous à MongoDB
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

  const httpServer = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });

  // Configurez Apollo Server
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  // Configurez WebSocket pour GraphQL
  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  useServer({ schema }, wsServer);
};

startServer();
