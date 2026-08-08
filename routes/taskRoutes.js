import { Router } from "express";
const router = Router();
import { taskController } from "../controllers/taskController.js";



//Get Tasks
router.get('/',taskController.getAllTasks);
router.get('/:id',taskController.getTaskById);

//Add Tasks
router.post('/',taskController.createTask);

//Update Tasks
router.put('/:id',taskController.updateTaskById);

//Delete Tasks
router.delete('/:id',taskController.deleteTaskById);

export default router;