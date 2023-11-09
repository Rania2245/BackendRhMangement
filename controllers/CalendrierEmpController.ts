import { Request, Response, NextFunction } from "express";
import CalendrierEmpService from "../services/CalendrierEmpService";


export const CalandrierEmpController = {
  getAll: (_req: Request, res: Response, _next: NextFunction) => {
    const calandsEmps = CalendrierEmpService.getAll();
    res.send(calandsEmps);
  },
  getOne: async (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;
    const employeeCalendar = await CalendrierEmpService.getOne(parseInt(params.id))
    res.send(employeeCalendar); 
  },
  startEmployeeDay: async (req: Request, res: Response, next: NextFunction) => {
    const { params } = req;
    const now = new Date();
    const employeeCalendar = await CalendrierEmpService.AjouterHeureArriv(parseInt(params.id), now);
    res.send(employeeCalendar); 
  },
  
};
