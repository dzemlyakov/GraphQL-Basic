import {RESTDataSource} from 'apollo-datasource-rest';

export class AlbumsApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://localhost:3005/v1/albums"
    }

   async getAlbums() {
    const albums = await this.get('/')
    return albums.items
   }
}
