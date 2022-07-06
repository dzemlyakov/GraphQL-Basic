export default {
    Query: {
        bands: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.bandsApi.getBands()   
        },
        band: async (parent:any, args:any, {dataSources}:any) => {
            return dataSources.bandsApi.getBand(args.id)
        }
    },
    Band: {
        id:(parent:any) => parent._id
    }    
}
