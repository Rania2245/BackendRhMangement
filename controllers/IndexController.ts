import { Request, Response, NextFunction } from "express";

export const indexController = {
  getAll: (_req: Request, res: Response, _next: NextFunction) => {
    res.send("index getAll");
  },
  getOne: (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;
    res.send(`getOne ${params.id}`);
  },
};
