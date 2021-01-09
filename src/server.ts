import express, { Application } from "express";
import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import routes from "./routes";
import * as swaggerDocument from "./swagger.json";
import { IConfigCore } from "./Config/IConfig";
import errorHandler from "./Middlewares/ErrorHandler";
import notFoundHandler from "./Middlewares/NotFoundHandler";

export class Server {
  private app: Application;
  constructor(private config: IConfigCore) {
    this.app = express();
  }

  get Application() {
    return this.app;
  }

  public init() {
    this.initCompressor();
    this.initBodyParser();
    this.initCors();
    this.initHelmet();

    this.initRoutes();
    this.initSwagger();
    this.setupErrorHandler();
    this.setupNotFoundHandler();
  }

  private initCompressor() {
    this.app.use(compression());
  }

  private initBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private initHelmet() {
    this.app.use(helmet());
  }

  private initCors() {
    this.app.use(cors());
  }

  private initRoutes() {
    const { apiPrefix } = this.config;
    this.app.use(apiPrefix, routes);
  }

  private initSwagger() {
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  private setupErrorHandler() {
    const { nodeEnv } = this.config;
    this.app.use(errorHandler(nodeEnv));
  }

  private setupNotFoundHandler() {
    this.app.use(notFoundHandler);
  }
}
