"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const job_route_1 = require("../modules/job/job.route");
const application_route_1 = require("../modules/application/application.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        router: user_route_1.UserRoutes,
    },
    {
        path: "/auth",
        router: auth_route_1.AuthRoutes,
    },
    {
        path: "/jobs",
        router: job_route_1.JobRoutes,
    },
    {
        path: "/applications",
        router: application_route_1.ApplicationRoutes,
    },
];
moduleRoutes.forEach(route => {
    router.use(route.path, route.router);
});
exports.default = router;
