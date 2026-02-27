import httpStatus from "http-status-codes";
import AppError from "../../helpers/AppError";
import { IApplication } from "./application.interface";
import { Application } from "./application.model";
import { Job } from "../job/job.model";

const createApplication = async (payload: IApplication) => {
    const { job_id, email } = payload;

    const isJobExist = await Job.findById(job_id);

    if (!isJobExist) {
        throw new AppError(httpStatus.NOT_FOUND, "Job not found");
    }

    const isAlreadyApplied = await Application.findOne({
        job_id,
        email,
    });

    if (isAlreadyApplied) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            "You have already applied for this job"
        );
    }

    const result = await Application.create(payload);

    return result;
};

export const ApplicationServices = {
    createApplication,
};