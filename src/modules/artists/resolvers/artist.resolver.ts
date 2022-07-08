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
      return dataSources.artistsApi.delete(id);
    }
  }
};
