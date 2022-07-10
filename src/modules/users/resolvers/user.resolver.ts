export default {
  Query: {
    jwt: (parent, args, { dataSources }) => {
      return dataSources.usersApi.login(args.email, args.password);
    },
    user: (parent, args, { dataSources }) => {
      return dataSources.usersApi.getUser(args.id);
    }
  },
  User: {
    id: (parent) => parent._id,
  },
  Mutation: {
    register: (parent, {input}, { dataSources }) => {
      return dataSources.usersApi.register(input);
    }
  }
};
