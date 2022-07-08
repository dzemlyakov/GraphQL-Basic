import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

export class TracksApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3006/v1/tracks";
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getTracks() {
    const tracks = await this.get("/");
    return tracks.items;
  }

  async getTrack(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  async createTrack(data) {
    const track = await this.post("", data);
    return track;
  }

  async updateTrack(id, data) {
    const track = await this.put(`/${encodeURIComponent(id)}`, data);
    return track;
  }

  async deleteTrack(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
