import { Router } from "express";
import { indexController } from "../controllers/IndexController";
const router = Router();

router.get("/", indexController.getAll);
router.get("/:id", indexController.getOne);

export default router;
