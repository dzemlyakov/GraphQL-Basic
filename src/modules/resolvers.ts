import {merge} from 'lodash';
import trackResolver from './tracks/resolvers/track.resolver';
import albumResolver from './albums/resolvers/album.resolver';
import artistResolver from './artists/resolvers/artist.resolver';
import bandResolver from './bands/resolvers/band.resolver';

export const resolvers = merge({}, trackResolver, albumResolver, artistResolver, bandResolver)
