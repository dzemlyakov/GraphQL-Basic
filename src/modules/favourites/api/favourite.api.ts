import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class FavouritesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3007/v1/favourites";
  }
  
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }
  
  async getFavourites(offset = 0, limit = 10) {
    const favourites = await this.get("/",{
      offset,
      limit
    });
    return favourites;
  }

  async addTrackToFavourites(id) {    
    return this.put('/add', {
        id,
        type: "tracks"
      })
  }

  async addBandToFavourites(id) {
      return this.put('/add', {
        id,
        type: "bands"
      })
  }

  async addArtistToFavourites(id) {
      return this.put('/add', {
        id,
        type: "artists"
      })
  }

  async addGenreToFavourites(id) {
      return this.put('/add', {
        id,
        type: "genres"
      })
  }
  
}
