import {RequestOptions, RESTDataSource} from 'apollo-datasource-rest';

export class BandsApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://localhost:3003/v1/bands"
    }
willSendRequest(req: RequestOptions) {
        req.headers.set("Authorization", `Bearer ${this.context.token}`);
      }
   async getBands() {
    const bands = await this.get('/')
    return bands.items
   }
   
   async getBand(id:string) {
    return await this.get(`/${encodeURIComponent(id)}`)
   }

   async createBand(data) {
    const band = await this.post("", data);
    return band;
  }

  async updateBand(id, data) {
    const band = await this.put(`/${encodeURIComponent(id)}`, data);
    return band;
  }

  async deleteBand(id) {
    return this.delete(`/${encodeURIComponent(id)}`);
  }
}
