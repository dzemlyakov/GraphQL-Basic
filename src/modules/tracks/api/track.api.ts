import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { LIMIT, OFFSET } from "../../../config/config";

export class TracksApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_TRACKS || "http://localhost:3006/v1/tracks";
  }

  willSendRequest(req: RequestOptions) {
    req.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  async getTracks(offset = OFFSET, limit = LIMIT) {
    const tracks = await this.get("/", {offset, limit});
    return tracks.items;
  }

  async getTrack(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  async createTrack(data) {
    const track = await this.post("", data);
    return track;
  }

  async updateTrack(id:string, data) {
    const track = await this.put(`/${encodeURIComponent(id)}`, data);
    return track;
  }

  async deleteTrack(id:string) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
