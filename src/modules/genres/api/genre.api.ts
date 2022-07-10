import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { LIMIT, OFFSET } from "../../../config/config";

export class GenresApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_GENRES || "http://localhost:3001/v1/genres";
  }
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getGenres(offset = OFFSET, limit = LIMIT) {
    const genres = await this.get("/", {offset, limit});
    return genres.items;
  }

  async getGenre(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  async createGenre(data) {
    const genre = this.post("", data);
    return genre;
  }

  async updateGenre(id:string, data) {
    const genre = this.put(`/${encodeURIComponent(id)}`, data);
    return genre;
  }

  async deleteGenre(id:string) {
    return await this.delete(`/${encodeURIComponent(id)}`);
  }
}
