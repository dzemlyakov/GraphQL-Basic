import {merge} from 'lodash';
import trackResolver from './tracks/resolvers/track.resolver';

export const resolvers = merge({}, trackResolver)
