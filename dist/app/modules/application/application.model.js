"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const mongoose_1 = require("mongoose");
const applicationSchema = new mongoose_1.Schema({
    job_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Job",
        required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    resume_link: { type: String, required: true },
    cover_note: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false
});
exports.Application = (0, mongoose_1.model)("Application", applicationSchema);
