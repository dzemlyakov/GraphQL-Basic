import {RequestOptions, RESTDataSource} from 'apollo-datasource-rest';
import { LIMIT, OFFSET } from '../../../config/config';

export class BandsApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = process.env.URL_BANDS || "http://localhost:3003/v1/bands"
    }
willSendRequest(req: RequestOptions) {
        req.headers.set("Authorization", `Bearer ${this.context.token}`);
      }
   async getBands(offset = OFFSET, limit = LIMIT) {
    const bands = await this.get("/",{offset, limit});
    return bands.items
   }
   
   async getBand(id:string) {
    return await this.get(`/${encodeURIComponent(id)}`)
   }

   async createBand(data) {
    const band = await this.post("", data);
    return band;
  }

  async updateBand(id:string, data) {
    const band = await this.put(`/${encodeURIComponent(id)}`, data);
    return band;
  }

  async deleteBand(id:string) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
