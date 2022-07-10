export default {
  Query: {
    tracks: async (paren, args, { dataSources }) => {
      const {offset, limit} = args
      return dataSources.tracksApi.getTracks(offset, limit);
    },
    track: async (parent, args, { dataSources }) => {
      return dataSources.tracksApi.getTrack(args.id);
    }
  },
  Track: {
    id: (parent) => parent._id,
    bands: (parent, args, { dataSources }) => {
      return parent.bandsIds.map((id) => dataSources.bandsApi.getBand(id));
    },
    genres: (parent, args, { dataSources }) => {
      return parent.genresIds.map((id) => dataSources.genresApi.getGenre(id));
    },
    artists: (parent, args, { dataSources }) => {
        return parent.artistsIds.map((id) => dataSources.artistsApi.getArtist(id));
    },
    album: (parent, args, { dataSources }) => {   
      return dataSources.albumsApi.getAlbum(parent.albumId);
      }
  },
  Mutation: {
    createTrack: async (parent, { input }, { dataSources }) => {
      return dataSources.tracksApi.createTrack(input);
    },
    updateTrack: async (parent, { id, input }, { dataSources }) => {
      return dataSources.tracksApi.updateTrack(id, input);
    },
    deleteTrack: async (parent, { id }, { dataSources }) => {
      return dataSources.tracksApi.deleteTrack(id);
    }
  }
};
