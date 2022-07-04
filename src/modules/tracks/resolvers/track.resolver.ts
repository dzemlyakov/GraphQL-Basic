export default {
    Query: {
        tracks: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.tracksApi.getTracks()   
        }
    }
}