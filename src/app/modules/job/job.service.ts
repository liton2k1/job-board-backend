import { IJob } from "./job.interface";
import { Job } from "./job.model";

const createJob = async (payload: IJob) => {
    const result = await Job.create(payload);
    return result;
};

const getAllJobs = async (query: Record<string, unknown>) => {
    const { category, location, company, search } = query;

    const filter: Record<string, unknown> = {};

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

    const result = await Job.find(filter);
    return result;
};

const getSingleJob = async (id: string) => {
    const result = await Job.findById(id);
    return result;
};

const updateJob = async (id: string, payload: IJob) => {
    const result = await Job.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteJob = async (id: string) => {
    const result = await Job.findByIdAndDelete(id);
    return result;
};

export const JobServices = {
    createJob,
    getAllJobs,
    getSingleJob,
    updateJob,
    deleteJob,
};