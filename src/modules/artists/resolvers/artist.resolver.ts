export default {
  Query: {
    artists: async (parent: any, args: any, { dataSources }: any) => {
      return dataSources.artistsApi.getArtists();
    },
    artist: async (parent: any, args: any, { dataSources }: any) => {
      return dataSources.artistsApi.getArtist(args.id);
    }
  },
  Artist: {
    id: (parent: any) => parent._id,
  },
  Mutation: {
    createArtist: async (parent, { input }, { dataSources }) => {
      return dataSources.artistsApi.createArtist(input);
    },
    updateArtist: async (parent, { id, input }, { dataSources }) => {
      return dataSources.artistsApi.updateArtist(id, input);
    },
    deleteArtist: async (parent, { id }, { dataSources }) => {
      return dataSources.artistsApi.delete(id);
    }
  }
};
