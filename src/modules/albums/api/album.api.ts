import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

export class AlbumsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3005/v1/albums";
  }
  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getAlbums() {
    const albums = await this.get("/");
    return albums.items;
  }

  async getAlbum(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }
  
  async createAlbum(data) {
    const album = await this.post("", data);
    return album;
  }

  async updateAlbum(id, data) {
    const album = await this.put(`/${encodeURIComponent(id)}`, data);
    return album;
  }

  async deleteAlbum(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
