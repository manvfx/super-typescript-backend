import { Router } from "express";
import { UserController } from "./controller";

const routes = Router();

routes.post("/users", UserController.save);

export default routes;
