import { ApolloServer } from "apollo-server";
import { TracksApi } from "./modules/tracks/api/track.api";
import { typeDefs } from "./modules/typesDefs"
import { resolvers } from "./modules/resolvers";
import { AlbumsApi } from "./modules/albums/api/album.api";
import { ArtistsApi } from "./modules/artists/api/artist.api";
import { BandsApi } from "./modules/bands/api/band.api";
import { GenresApi } from "./modules/genres/api/genre.api";
const PORT = process.env || 4001

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    dataSources:() => {
        return {
            tracksApi: new TracksApi(),
            albumsApi: new AlbumsApi(),
            artistsApi: new ArtistsApi(),
            bandsApi: new BandsApi(),
            genresApi: new GenresApi()
        } 
    },
  });

server.listen(4001).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });