import { Request, Response, NextFunction } from "express";
import { sign } from "jsonwebtoken";
import EmployeService from "../services/EmployeService";
import jwtKey from "../auth/constant";

export const EmployeController = {
  getAll: async (_req: Request, res: Response, _next: NextFunction) => {
    const Employes = await EmployeService.getAll();
    res.send(Employes);
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;
    const user = await EmployeService.getOne(parseInt(params.id));
    res.send(user);
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    const {
      params: { email, password },
    } = req;
    console.log({ email, password });
    const user = await EmployeService.login(email, password);
    if (user === null) {
      res.status(400).json({ message: "Error" });
    } else {
      const token = sign({ id: user.id }, jwtKey);

      res.json({ message: "Logged in successfully", token });
    }
  },
  register: async (req: Request, res: Response, next: NextFunction) => {
    const {
      body: { email, password },
    } = req;
    const user = await EmployeService.register(email, password);
    if (user !== null) {
      const token = sign({ id: user.id }, jwtKey);

      res.json({ message: "Logged in successfully", token });
    }
    res.status(400).json({ message: "Error" });
  },
  profile: async (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as number;
    const profile = await EmployeService.getOne(user);
    res.json(profile);
  },
};
