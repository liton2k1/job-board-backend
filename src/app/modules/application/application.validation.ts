import { z } from "zod";

export const createApplicationZodSchema = z.object({
    job_id: z.string({ required_error: "Job ID is required" }),
    name: z.string({ required_error: "Name is required" }),
    email: z
        .string({ required_error: "Email is required" })
        .email("Invalid email"),
    resume_link: z
        .string({ required_error: "Resume link is required" })
        .url("Must be a valid URL"),
    cover_note: z.string({ required_error: "Cover note is required" }),
});