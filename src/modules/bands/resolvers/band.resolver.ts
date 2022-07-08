export default {
    Query: {
        bands: async (parent:any, args:any, {dataSources}:any) => {
         return dataSources.bandsApi.getBands()   
        },
        band: async (parent:any, args:any, {dataSources}:any) => {
            return dataSources.bandsApi.getBand(args.id)
        }
    },
    Member: {
        id:(parent) => parent._id
    },
    Band: {
        id:(parent:any) => parent._id,
        genres: (parent, args, {dataSources}) => {
            return parent.genresIds.map((id) => dataSources.genresApi.getGenre(id))
        },
        members: async (parent, args, {dataSources}) => {
            const {members} = parent
            return (await Promise.all(members.map(async member=>{
                return dataSources.artistsApi.getArtist(member.id)
            }))).map((artist, index)=> ({
                ...artist,
                instrument: members[index].instrument,
                years: members[index].years
            }))
        }
    },
    Mutation: {
        createBand: async (parent, { input }, { dataSources }) => {
          return dataSources.bandsApi.createBand(input);
        },
        updateBand: async (parent, { id, input }, { dataSources }) => {
          return dataSources.bandsApi.updateBand(id, input);
        },
        deleteBand: async (parent, { id }, { dataSources }) => {
          return dataSources.bandsApi.deleteBand(id);
        }
      }    
}
