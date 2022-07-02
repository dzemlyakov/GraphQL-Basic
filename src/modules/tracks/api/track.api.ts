import {RESTDataSource} from 'apollo-datasource-rest';

export class TracksApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://localhost:3006/v1/tracks"
    }

   async getTracks() {
    const tracks = await this.get('/')

    return tracks.items
   }
}
