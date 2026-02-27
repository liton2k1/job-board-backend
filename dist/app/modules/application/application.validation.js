"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplicationZodSchema = void 0;
const zod_1 = require("zod");
exports.createApplicationZodSchema = zod_1.z.object({
    job_id: zod_1.z.string({ required_error: "Job ID is required" }),
    name: zod_1.z.string({ required_error: "Name is required" }),
    email: zod_1.z
        .string({ required_error: "Email is required" })
        .email("Invalid email"),
    resume_link: zod_1.z
        .string({ required_error: "Resume link is required" })
        .url("Must be a valid URL"),
    cover_note: zod_1.z.string({ required_error: "Cover note is required" }),
});
