import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";

export const userController = {
  getAll: (_req: Request, res: Response, _next: NextFunction) => {

    const users = UserService.getAll();
    res.send(users);
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;
    const user = await UserService.getOne(parseInt(params.id))
    res.send(user);
  },
};
