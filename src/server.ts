import { ApolloServer } from "apollo-server";
import { TracksApi } from "./modules/tracks/api/track.api";
import { typeDefs } from "./modules/typesDefs"
import { resolvers } from "./modules/resolvers";
import { AlbumsApi } from "./modules/albums/api/album.api";
const PORT = process.env || 4001

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    dataSources:() => {
        return {
            tracksApi: new TracksApi(),
            albumsApi: new AlbumsApi()
        } 
    },
  });

server.listen(4001).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });