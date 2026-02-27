import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status-codes";
import { ApplicationServices } from "./application.service";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

const createApplication = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const result = await ApplicationServices.createApplication(req.body);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.CREATED,
            message: "Application submitted successfully!",
            data: result,
        });
    }
);

export const ApplicationControllers = {
    createApplication,
};