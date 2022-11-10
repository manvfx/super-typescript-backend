import { Request, Response } from "express";
import UserService from "./user.service";
import IUser from "./user.interface";

export class UserController {
  public static async save(req: Request, res: Response) {
    const user: IUser = req.body;
    const userService = new UserService();
    res.json(userService.save(user));
  }
  public static async findAll(req: Request, res: Response) {
    const user: IUser = req.body;
    const userService = new UserService();
    res.json(userService.findAll(user));
  }
}
