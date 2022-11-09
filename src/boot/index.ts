import { Application, static as expressStatic } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import { resolve } from "path";

export default function boot(app: Application) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(fileUpload());
  app.use(expressStatic(resolve(process.cwd(), "public")));
}
