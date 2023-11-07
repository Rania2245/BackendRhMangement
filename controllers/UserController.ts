import { Request, Response, NextFunction } from "express";

export const userController = {
  getAll: (_req: Request, res: Response, _next: NextFunction) => {
    res.send("users route");
  },
  getOne: (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;
    res.send(`getOne ${params.id}`);
  },
};
