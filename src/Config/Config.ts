import dotenv from "dotenv";
import { IConfigCore } from "./IConfig";

dotenv.config();

const config: IConfigCore = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  apiPrefix: process.env.API_PREFIX,
  mongoUri:
    process.env.MONGO_URI ||
    "mongodb://localhost:27017/online-rent-platfrom?retryWrites=false"
};

export default config;
