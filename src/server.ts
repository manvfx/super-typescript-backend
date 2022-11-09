import * as dotenv from 'dotenv';
import fs from "fs";
import startMongoose from "./database/mongoose";
import App from "./app";

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
} else {
  dotenv.config({ path: ".env.example" });
}

startMongoose();

const port: number = process.env.APP_PORT as unknown as number;
const application = new App(port);
application.start();
