import { Request, Response, NextFunction } from "express";
import UserService from "../services/UserService";
import EmployeService from "../services/EmployeService";

export const EmployeController = {
  getAll: (_req: Request, res: Response, _next: NextFunction) => {
    const Employes= EmployeService.getAll();
    res.send(Employes);
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const {params} = req;
    const user = await EmployeService.getOne(parseInt(params.id))
    res.send(user);
  },
};
