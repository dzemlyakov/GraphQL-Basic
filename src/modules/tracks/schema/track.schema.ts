import { gql } from "apollo-server-core"

export default gql`
type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
}

type Query {
    tracks(limit:Int, offset:Int): [Track]
    track(id:ID!): Track
}
input TrackInput {
    title: String!
    albumId: ID
    artistsIds: [ID]
    bandsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
}
input TrackInputUpdate {
    title: String
    albumId: ID
    artistsIds: [ID]
    bandsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
}
extend type Mutation {
    createTrack(input: TrackInput!): Track
    updateTrack(id: ID!, input:TrackInputUpdate!): Track
    deleteTrack(id: ID!): DeleteItem
}
`
