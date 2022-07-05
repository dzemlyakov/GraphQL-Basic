export default {
    Query: {
        tracks: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.tracksApi.getTracks()   
        },
        track: async (parent:any, args:any, {dataSources}:any) => {
            return dataSources.tracksApi.getTrack(args.id)
        }
    },
    Track: {
        id:(parent:any) => parent._id
    }    
}
