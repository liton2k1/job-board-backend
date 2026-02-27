import { Router } from "express";
import { ApplicationControllers } from "./application.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createApplicationZodSchema } from "./application.validation";

const router = Router();

router.post(
    "/",
    validateRequest(createApplicationZodSchema),
    ApplicationControllers.createApplication
);

export const ApplicationRoutes = router;