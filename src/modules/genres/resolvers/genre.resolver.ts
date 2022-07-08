
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
    },
    Mutation:{
        createGenre:(parent, {input}, {dataSources}) =>{
            return dataSources.genresApi.createGenre(input)
        },
        updateGenre:(parent, {id, input}, {dataSources})=>{
            return dataSources.genresApi.updateGenre(id, input)
        },
        deleteGenre:(parent, args, {dataSources})=>{
            return dataSources.genresApi.deleteGenre(args.id)
        }
    }    
}
