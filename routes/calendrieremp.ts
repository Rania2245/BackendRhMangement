import { Router } from "express";
import { CalandrierEmpController } from "../controllers/CalendrierEmpController";
const router = Router();

router.get("/", CalandrierEmpController.getAll);
router.get("/:id", CalandrierEmpController.startEmployeeDay);

export default router;
