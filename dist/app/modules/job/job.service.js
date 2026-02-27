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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobServices = void 0;
const job_model_1 = require("./job.model");
const createJob = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.create(payload);
    return result;
});
const getAllJobs = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, location, company, search } = query;
    const filter = {};
    if (category) {
        filter.category = category;
    }
    if (location) {
        filter.location = location;
    }
    if (company) {
        filter.company = company;
    }
    if (search) {
        filter.title = { $regex: search, $options: "i" };
    }
    const result = yield job_model_1.Job.find(filter);
    return result;
});
const getSingleJob = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findById(id);
    return result;
});
const updateJob = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteJob = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.Job.findByIdAndDelete(id);
    return result;
});
exports.JobServices = {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob,
};
