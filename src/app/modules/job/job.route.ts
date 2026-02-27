import { Router } from "express";
import { JobControllers } from "./job.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { createJobZodSchema } from "./job.validation";

const router = Router();

router.post(
    "/",
    validateRequest(createJobZodSchema),
    checkAuth(Role.ADMIN),
    JobControllers.createJob
);

router.get("/", JobControllers.getAllJobs);
router.get("/:id", JobControllers.getSingleJob
);

router.patch(
    "/:id",
    validateRequest(createJobZodSchema),
    checkAuth(Role.ADMIN),
    JobControllers.updateJob
);

router.delete(
    "/:id",
    checkAuth(Role.ADMIN),
    JobControllers.deleteJob
);

export const JobRoutes = router;