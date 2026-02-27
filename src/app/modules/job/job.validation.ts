import { z } from "zod";

export const createJobZodSchema = z.object({
    title: z.string({ required_error: "Title is required" }),
    company: z.string({ required_error: "Company is required" }),
    location: z.string({ required_error: "Location is required" }),
    category: z.string({ required_error: "Category is required" }),
    description: z.string({ required_error: "Description is required" }),
});

export const updateJobZodSchema = z.object({
    title: z.string().optional(),
    company: z.string().optional(),
    location: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
});