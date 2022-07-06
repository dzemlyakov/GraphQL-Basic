import {RESTDataSource, RequestOptions} from 'apollo-datasource-rest';

export class UsersApi extends RESTDataSource {
    constructor(){
        super();
        this.baseURL = "http://localhost:3004/v1/users"
    }
    willSendRequest(req:RequestOptions){
        req.headers.set('Autorization', this.context.token)  
    }

    login(email: string, password: string) {
    console.log("🚀 ~ UsersApi ~ login ~ password", password)
    console.log("🚀 ~ UsersApi ~ login ~ email", email)
        
        return this.post('/login', {email, password})
    }

    getUser(id:string) {
        return this.get(`/${encodeURIComponent(id)}`)
       }
   
  
}
