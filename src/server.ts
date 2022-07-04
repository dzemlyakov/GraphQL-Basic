import { ApolloServer } from "apollo-server";
import { TracksApi } from "./modules/tracks/api/track.api";
import { typeDefs } from "./modules/typesDefs"
import { resolvers } from "./modules/resolvers";
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