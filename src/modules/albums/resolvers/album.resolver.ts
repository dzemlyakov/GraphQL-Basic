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
    }
  
};
