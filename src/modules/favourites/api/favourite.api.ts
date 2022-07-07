import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class FavouritesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3007/v1/favourites";
  }
  
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }
  
  async getFavourites() {
    const favourites = await this.get("/");
    return favourites.items;
  }
}
