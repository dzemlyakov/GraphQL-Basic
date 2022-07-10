import { gql } from "apollo-server-core"

export default gql` 
type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}
type DeleteItem {
    acknowledged: Boolean
    deletedCount: Int
}
input GenreInput {
    name: String!
    description: String
    country: String
    year: Int
}
input GenreInputUpdate {
    name: String
    description: String
    country: String
    year: Int
}
extend type Query {
    genres(limit:Int, offset:Int): [Genre]
    genre(id:ID!): Genre
}
extend type Mutation {
    createGenre(input: GenreInput!): Genre
    updateGenre(id: ID!, input: GenreInputUpdate!): Genre
    deleteGenre(id: ID!): DeleteItem
}
`
