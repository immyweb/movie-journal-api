export const config = {
  dbUrl: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.e0jlf.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
};
