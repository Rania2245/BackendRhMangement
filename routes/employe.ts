import { Router } from "express";
import { EmployeController } from "../controllers/EmployeController";
const router = Router();

router.get("/", EmployeController.getAll);
router.get("/:id", EmployeController.getOne);

export default router;
