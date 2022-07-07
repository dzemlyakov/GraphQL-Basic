export default {
  Query: {
    jwt: (parent: any, args: any, { dataSources }: any) => {
      return dataSources.usersApi.login(args.email, args.password);
    },
    user: (parent: any, args: any, { dataSources }: any) => {
      return dataSources.usersApi.getUser(args.id);
    }
  },
  User: {
    id: (parent: any) => parent._id,
  },
  Mutation: {
    register: (parent: any, {input}:any, { dataSources }: any) => {
      return dataSources.usersApi.register(input);
    }
  }
};
