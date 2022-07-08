import { gql } from "apollo-server-core"

export default gql`
type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
}
input ArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
}
input ArtistInputUpdate {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
}
extend type Query {
    artists(limit:Int, offset:Int): [Artist]
    artist(id:ID!): Artist
}
extend type Mutation {
    createArtist(input: ArtistInput!): Artist
    updateArtist(id: ID!, input:ArtistInputUpdate): Artist
    deleteArtist(id: ID!): DeleteItem
}
`

