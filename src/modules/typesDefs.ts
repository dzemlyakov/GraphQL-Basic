import trackTypeDefs from './tracks/schema/track.schema'
import albumTypeDefs from './albums/schema/album.schema';
import artistTypeDefs from './artists/schema/artist.schema';
import bandTypeDefs from './bands/schema/band.schema';
import favouriteTypeDefs from './favourites/schema/favourite.schema';
import genreTypeDefs from './genres/schema/genre.schema';
import userTypeDefs from './users/schema/user.schema';


export const typeDefs = [trackTypeDefs, albumTypeDefs, artistTypeDefs, bandTypeDefs, favouriteTypeDefs, genreTypeDefs, userTypeDefs]