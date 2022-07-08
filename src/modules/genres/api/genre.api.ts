import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

export class GenresApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/v1/genres";
  }
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }
  
  async getGenres() {
    const genres = await this.get("/");
    return genres.items;
  }

  async getGenre(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  async createGenre(data) {
    const genre = this.post('', data)
    return genre
  }

  async updateGenre(id, data){
    const genre = this.put(`/${encodeURIComponent(id)}`, data)
    return genre
  }
}
