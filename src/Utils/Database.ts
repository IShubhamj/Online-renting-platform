import mongoose from "mongoose";
import config from "../Config/Config";

export default class Database {
  static mongooseConnection: mongoose.Connection;

  public static Open() {
    return new Promise((resolve, reject) => {
      const options = {
        autoIndex: true,
        bufferMaxEntries: 0,
        poolSize: 5,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      };

      mongoose.connect(config.mongoUri, options);

      mongoose.connection.on("connected", () => {
        console.log("Connected to db");
        resolve({ msg: "Database connected" });
      });

      mongoose.connection.on("error", error => {
        reject(error);
      });
    });
  }

  public static Close() {
    mongoose.disconnect();
  }
}
