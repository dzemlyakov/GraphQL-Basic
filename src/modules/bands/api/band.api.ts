import {RESTDataSource} from 'apollo-datasource-rest';

export class BandsApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://localhost:3003/v1/bands"
    }

   async getBands() {
    const bands = await this.get('/')
    return bands.items
   }
   
   async getBand(id:string) {
    return await this.get(`/${encodeURIComponent(id)}`)
   }
}
