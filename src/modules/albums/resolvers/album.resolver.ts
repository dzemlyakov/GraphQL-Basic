export default {
    Query: {
        albums: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.albumsApi.getAlbums()   
        }
    },
    Album: {
        id:(parent:any) => parent._id
    }    
}