"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationServices = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const AppError_1 = __importDefault(require("../../helpers/AppError"));
const application_model_1 = require("./application.model");
const job_model_1 = require("../job/job.model");
const createApplication = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { job_id, email } = payload;
    const isJobExist = yield job_model_1.Job.findById(job_id);
    if (!isJobExist) {
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Job not found");
    }
    const isAlreadyApplied = yield application_model_1.Application.findOne({
        job_id,
        email,
    });
    if (isAlreadyApplied) {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, "You have already applied for this job");
    }
    const result = yield application_model_1.Application.create(payload);
    return result;
});
exports.ApplicationServices = {
    createApplication,
};
