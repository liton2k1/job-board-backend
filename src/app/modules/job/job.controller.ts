import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { JobServices } from "./job.service";
import { sendResponse } from "../../utils/sendResponse";

const createJob = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await JobServices.createJob(req.body);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.CREATED,
            message: "Job created successfully!",
            data: result,
        });
    }
);

const getAllJobs = catchAsync(async (req, res) => {
    const result = await JobServices.getAllJobs(req.query);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Jobs retrieved successfully!",
        data: result,
    });
});

const getSingleJob = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await JobServices.getSingleJob(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Job retrieved successfully!",
        data: result,
    });
});

const updateJob = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await JobServices.updateJob(id, req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Job updated successfully!",
        data: result,
    });
});

const deleteJob = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await JobServices.deleteJob(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Job deleted successfully!",
        data: result,
    });
});

export const JobControllers = {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob,
};