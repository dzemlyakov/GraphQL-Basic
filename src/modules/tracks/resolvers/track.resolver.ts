export default {
    Query: {
        tracks: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.tracksApi.getTracks()   
        }
    },
    Track: {
        id:(parent:any) => parent._id
    }    
}
