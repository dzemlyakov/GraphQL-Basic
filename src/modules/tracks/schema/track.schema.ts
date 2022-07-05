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
`
