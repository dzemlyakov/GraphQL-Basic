import { gql } from "apollo-server-core"

export default gql`
type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
}
extend type Query {
    favourites: Favourites
}
extend type Mutation {
    addTrackToFavourites(TrackId: ID!): Favourites
    addBandToFavourites(BandId: ID!): Favourites
    addArtistToFavourites(ArtistId: ID!): Favourites
    addGenreToFavourites(GenreId: ID!): Favourites
}
`
