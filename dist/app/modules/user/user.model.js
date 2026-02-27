"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const user_interface_1 = require("./user.interface");
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    address: { type: String, trim: true },
    profile: { type: String },
    gender: {
        type: String,
        enum: Object.values(user_interface_1.Gender),
    },
    role: {
        type: String,
        enum: Object.values(user_interface_1.Role),
        default: user_interface_1.Role.USER
    },
    isActive: {
        type: String,
        enum: Object.values(user_interface_1.ActiveStatus),
        default: user_interface_1.ActiveStatus.ACTIVE
    },
    isVerified: { type: Boolean },
    isDeleted: { type: Boolean },
}, {
    timestamps: true,
    versionKey: false
});
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
