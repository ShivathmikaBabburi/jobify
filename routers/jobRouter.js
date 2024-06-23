import { Router } from "express";
import {
  validateJobInput,
  ValidateIdParam,
} from "../middleware/validationMiddleware.js";

const router = Router();
import {
  createJob,
  EditJob,
  getAllJobs,
  getSingleJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(ValidateIdParam, getSingleJob)
  .patch(validateJobInput, ValidateIdParam, EditJob)
  .delete(ValidateIdParam, deleteJob);

export default router;
