import { Types } from "mongoose";

export interface IApplication {
  job_id: Types.ObjectId;
  name: string;
  email: string;
  resume_link: string;
  cover_note: string;
  created_at?: Date;
}