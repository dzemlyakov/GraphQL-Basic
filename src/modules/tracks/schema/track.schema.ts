import { gql } from "apollo-server-core"

export const typeDefs = gql`
type Track {
    id: ID!
    title: String!
    
   
    duration: Int
    released: Int
    
}

type Query {
    tracks(limit:Int, offset:Int): [Track]
    track(id:ID!): Track
}
`
