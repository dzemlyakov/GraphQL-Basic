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
extend type Query {
    bands(limit:Int, offset:Int): [Band]
    band(id:ID!): Band
}

`

