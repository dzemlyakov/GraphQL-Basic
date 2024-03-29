import { gql } from "apollo-server-core"

export default gql`
type User {
  id: ID!
  firstName: String
  lastName: String
  password: String!
  email: String!
}
type JWT {
  jwt: String!
}

input UserInput {
  firstName: String!
  lastName: String!
  password: String!
  email: String!
}

extend type Query {
  jwt(email: String!, password: String!): JWT
  user(id: ID!): User
}

type Mutation {
  register(input: UserInput!): User
}
`

