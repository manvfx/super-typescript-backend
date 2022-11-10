import { Router } from "express";
import { UserController } from "./user.controller";

const routes = Router();

routes.post("/create", UserController.save);
routes.get("/list", UserController.findAll);

export default routes;
