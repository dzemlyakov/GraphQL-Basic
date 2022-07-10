export default {
  Query: {
    genres: async (parent, args, { dataSources }) => {
      const {offset, limit} = args
      return dataSources.genresApi.getGenres(offset, limit);
    },
    genre: async (parent, args, { dataSources }) => {
      return dataSources.genresApi.getGenre(args.id);
    }
  },
  Genre: {
    id: (parent) => parent._id
  },
  Mutation: {
    createGenre: (parent, { input }, { dataSources }) => {
      return dataSources.genresApi.createGenre(input);
    },
    updateGenre: (parent, { id, input }, { dataSources }) => {
      return dataSources.genresApi.updateGenre(id, input);
    },
    deleteGenre: (parent, args, { dataSources }) => {
      return dataSources.genresApi.deleteGenre(args.id);
    }
  }
};
