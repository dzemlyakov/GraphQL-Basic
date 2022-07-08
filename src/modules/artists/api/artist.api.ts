import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

export class ArtistsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3002/v1/artists";
  }
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getArtists() {
    const artists = await this.get("/");
    return artists.items;
  }

  async getArtist(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  async createArtist(data) {
    const artist = await this.post("", data);
    return artist;
  }

  async updateArtist(id, data) {
    const artist = await this.put(`/${encodeURIComponent(id)}`, data);
    return artist;
  }

  async deleteArtist(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
