import {merge} from 'lodash';
import trackResolver from './tracks/resolvers/track.resolver';
import albumResolver from './albums/resolvers/album.resolver';
import artistResolver from './artists/resolvers/artist.resolver';

export const resolvers = merge({}, trackResolver, albumResolver, artistResolver)
