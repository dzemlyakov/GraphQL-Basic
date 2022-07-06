export default {
    Query: {
        favourites: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.favouritesApi.getFavourites()   
        }
    }  
}
