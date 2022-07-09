export default {
  Query: {
    albums: async (parent: any, args: any, { dataSources }: any) => {
      return dataSources.albumsApi.getAlbums();
    },
    album: async (parent: any, args: any, { dataSources }: any) => {
      return dataSources.albumsApi.getAlbum(args.id);
    }
  },
  Album: {
    id: (parent: any) => parent._id,
    bands: (parent, args, { dataSources }) => {
      return parent.bandsIds.map((id) => dataSources.bandsApi.getBand(id));
    },
    genres: (parent, args, { dataSources }) => {
      return parent.genresIds.map((id) => dataSources.genresApi.getGenre(id));
    },
    artists: (parent, args, { dataSources }) => {
      return parent.artistsIds.map((id) => dataSources.artistsApi.getArtist(id));
    },
    tracks: (parent, args, { dataSources }) => {
      return parent.trackIds.map((id) => dataSources.tracksApi.getTrack(id));
    }
  },
  Mutation: {
    createAlbum: async (parent, { input }, { dataSources }) => {
      return dataSources.albumsApi.createAlbum(input);
    },
    updateAlbum: async (parent, { id, input }, { dataSources }) => {
      return dataSources.albumsApi.updateAlbum(id, input);
    },
    deleteAlbum: async (parent, { id }, { dataSources }) => {
      return dataSources.albumsApi.deleteAlbum(id);
    }
  }
};
