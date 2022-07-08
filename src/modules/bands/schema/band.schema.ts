import { gql } from "apollo-server-core"

export default gql`
type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}
type Member {
  id: ID!
  firstName: String
  secondName: String
  middleName: String
  instrument: String
  years: [String]
}
input MemberInput {
  id: ID!
  instrument: String
  years: [String]
}
input BandInput {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [ID]
}
input BandInputUpdate {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [ID]
}
extend type Query {
    bands(limit:Int, offset:Int): [Band]
    band(id:ID!): Band
}
extend type Mutation {
  createBand(input: BandInput!): Band
  updateBand(id: ID!, input: BandInputUpdate): Band
  deleteBand(id: ID!): DeleteItem 
}

`

