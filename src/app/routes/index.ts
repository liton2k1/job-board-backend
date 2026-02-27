import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { JobRoutes } from "../modules/job/job.route";

const router = Router()

const moduleRoutes = [
    {
        path: "/user",
        router: UserRoutes,
    },
    {
        path: "/auth",
        router: AuthRoutes,
    },
    {
        path: "/jobs",
        router: JobRoutes,
    },
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.router)
})

export default router;