"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJobZodSchema = exports.createJobZodSchema = void 0;
const zod_1 = require("zod");
exports.createJobZodSchema = zod_1.z.object({
    title: zod_1.z.string({ required_error: "Title is required" }),
    company: zod_1.z.string({ required_error: "Company is required" }),
    location: zod_1.z.string({ required_error: "Location is required" }),
    category: zod_1.z.string({ required_error: "Category is required" }),
    description: zod_1.z.string({ required_error: "Description is required" }),
});
exports.updateJobZodSchema = zod_1.z.object({
    title: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    location: zod_1.z.string().optional(),
    category: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
