import { ApolloServer } from "apollo-server";
import { TracksApi } from "./modules/tracks/api/track.api";
import { typeDefs } from "./modules/tracks/schema/track.schema";
import {resolvers} from './modules/tracks/resolvers/track.resolver';
const PORT = process.env || 4001

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    dataSources:() => {
        return {
            tracksApi: new TracksApi()
        } 
    },
  });

server.listen(4001).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });