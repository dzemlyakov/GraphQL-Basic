import {RESTDataSource} from 'apollo-datasource-rest';

export class GenresApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://localhost:3001/v1/genres"
    }

   async getGenres() {
    const genres = await this.get('/')
    return genres.items
   }
   
   async getGenre(id:string) {
    return await this.get(`/${encodeURIComponent(id)}`)
   }
}
