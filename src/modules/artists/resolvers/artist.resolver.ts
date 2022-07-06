export default {
    Query: {
        artists: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.artistsApi.getArtists()   
        },
        artist: async (parent:any, args:any, {dataSources}:any) => {
            return dataSources.artistsApi.getArtist(args.id)
        }
    },
    Artist: {
        id:(parent:any) => parent._id
    }    
}
