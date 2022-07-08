export default {
  Query: {
    tracks: async (parent: any, args: any, { dataSources }: any) => {
      return dataSources.tracksApi.getTracks();
    },
    track: async (parent: any, args: any, { dataSources }: any) => {
      return dataSources.tracksApi.getTrack(args.id);
    }
  },
  Track: {
    id: (parent: any) => parent._id,
    bands: (parent, args, { dataSources }) => {
      return parent.bandsIds.map((id) => dataSources.bandsApi.getBand(id));
    },
    genres: (parent, args, { dataSources }) => {
      return parent.genresIds.map((id) => dataSources.genresApi.getGenre(id));
    },
    artists: (parent, args, { dataSources }) => {
        return parent.artistsIds.map((id) => dataSources.artistsApi.getArtist(id));
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
