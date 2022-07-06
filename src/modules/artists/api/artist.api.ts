import {RESTDataSource} from 'apollo-datasource-rest';

export class ArtistsApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://localhost:3002/v1/artists"
    }

   async getArtists() {
    const artists = await this.get('/')
    return artists.items
   }
   
   async getArtist(id:string) {
    return await this.get(`/${encodeURIComponent(id)}`)
   }
}
