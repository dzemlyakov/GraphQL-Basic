export default {
  Query: {
    artists: async (parent, args, { dataSources }) => {
      const {offset, limit} = args
      return dataSources.artistsApi.getArtists(offset, limit);
    },
    artist: async (parent, args, { dataSources }) => {
      return dataSources.artistsApi.getArtist(args.id);
    }
  },
  Artist: {
    id: (parent) => parent._id,
    bands: (parent, args, {dataSources}) => {
        return parent.bandsIds.map((id) => dataSources.bandsApi.getBand(id)) 
    }
  },
  Mutation: {
    createArtist: async (parent, { input }, { dataSources }) => {
      return dataSources.artistsApi.createArtist(input);
    },
    updateArtist: async (parent, { id, input }, { dataSources }) => {
      return dataSources.artistsApi.updateArtist(id, input);
    },
    deleteArtist: async (parent, { id }, { dataSources }) => {
      return dataSources.artistsApi.deleteArtist(id);
    }
  }
};
