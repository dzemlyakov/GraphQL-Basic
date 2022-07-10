export default {
  Query: {
    favourites: async (parent, args, { dataSources }) => {
      return dataSources.favouritesApi.getFavourites();
    }
  },
  Favourites: {
    id: (parent) => parent._id,
    bands: (parent, args, { dataSources }) => {
      return parent.bandsIds.map((id) => dataSources.bandsApi.getBand(id));
    },
    genres: (parent, args, { dataSources }) => {
      return parent.genresIds.map((id) => dataSources.genresApi.getGenre(id));
    },
    artists: (parent, args, { dataSources }) => {
      return parent.artistsIds.map((id) =>
        dataSources.artistsApi.getArtist(id)
      );
    },
    tracks: (parent, args, { dataSources }) => {
      return parent.tracksIds.map((id) => dataSources.tracksApi.getTrack(id));
    }
  },
  Mutation: {
    addTrackToFavourites: async (parent, args, { dataSources }) => {  
        return dataSources.favouritesApi.addTrackToFavourites(args.TrackId);
    },
    addBandToFavourites: async (parent, args, { dataSources }) => {
      return dataSources.favouritesApi.addBandToFavourites(args.BandId);
    },
    addArtistToFavourites: async (parent, args, { dataSources }) => {
      return dataSources.favouritesApi.addArtistToFavourites(args.ArtistId);
    },
    addGenreToFavourites: async (parent, args, { dataSources }) => {
      return dataSources.favouritesApi.addGenreToFavourites(args.GenreId);
    }
  }
};
