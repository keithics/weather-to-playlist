import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';
import config from 'server/config';

class Mongo {
  public connection: MongoClient;

  async removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany({});
    }
  }

  async dropAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      try {
        await collection.drop();
      } catch (error) {
        // logger.info(error);
      }
    }
  }

  async close() {
    await mongoose.connection.close();
  }

  async init() {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', config.MONGO_DEBUG);
    return await mongoose.connect(config.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: true,
      useFindAndModify: false,
      tlsInsecure: true, //self signed certificate
    });
  }
}

export const mongo = new Mongo();
