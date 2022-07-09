import { gql } from "apollo-server-core";

export default gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
  input AlbumInput {
    name: String!
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
    image: String
  }
  input AlbumInputUpdate {
    name: String
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
    image: String
  }
  extend type Query {
    albums(limit:Int, offset:Int): [Album]
    album(id:ID!): Album
  }
  extend type Mutation {
    createAlbum(input: AlbumInput!): Album
    updateAlbum(id: ID!, input: AlbumInputUpdate!): Album
    deleteAlbum(id: ID!): DeleteItem
}

`;
