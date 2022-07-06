export default {
    Query: {
        genres: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.genresApi.getGenres()   
        },
        genre: async (parent:any, args:any, {dataSources}:any) => {
            return dataSources.genresApi.getGenre(args.id)   
        }
    },
    Genre: {
        id:(parent:any) => parent._id
    }    
}
