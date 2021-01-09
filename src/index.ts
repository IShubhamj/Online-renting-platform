import { Server } from "./server";
import Database from "./Utils/Database";
import config from "./Config/Config";
import seed from "./Utils/Seeding";

Database.Open()
  .then(() => {
    seed.start();
  })
  .then(() => {
    const serverInstance = new Server(config);
    serverInstance.init();

    const server = serverInstance.Application.listen(config.port);
    server.on("listening", async () => {
      console.log(`App is running on PORT ${config.port}`);
      console.log("Press ^C to to stop");
    });

    server.on("error", async (error) => {
      console.log("Got error in starting server");
      console.log(error);
    });

    server.on("close", async () => {
      console.log(`Disposing server on port ${config.port}`);
    });
  })
  .catch((error) => {
    console.log("Error in DB connection");
    console.log(error);
  });
