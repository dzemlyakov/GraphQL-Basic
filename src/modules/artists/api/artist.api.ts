import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { LIMIT, OFFSET } from "../../../config/config";

export class ArtistsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ARTISTS || "http://localhost:3002/v1/artists";
  }
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getArtists(offset = OFFSET, limit = LIMIT) {
    const artists = await this.get("/", {offset, limit});
    return artists.items;
  }

  async getArtist(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  async createArtist(data) {
    const artist = await this.post("", data);
    return artist;
  }

  async updateArtist(id:string, data) {
    const artist = await this.put(`/${encodeURIComponent(id)}`, data);
    return artist;
  }

  async deleteArtist(id:string) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
