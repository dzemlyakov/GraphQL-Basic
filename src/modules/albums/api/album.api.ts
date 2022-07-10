import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { LIMIT, OFFSET } from "../../../config/config";

export class AlbumsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ALBUMS || "http://localhost:3005/v1/albums";
  }
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getAlbums(offset = OFFSET, limit = LIMIT) {
    const albums = await this.get("/",{offset, limit});
    return albums.items;
  }

  async getAlbum(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }
  
  async createAlbum(data) {
    const album = await this.post("", data);
    return album;
  }

  async updateAlbum(id:string, data) {
    const album = await this.put(`/${encodeURIComponent(id)}`, data);
    return album;
  }

  async deleteAlbum(id:string) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
