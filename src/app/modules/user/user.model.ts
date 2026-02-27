import { model, Schema } from "mongoose";
import { ActiveStatus, Gender, IAuthProviders, IUser, Role } from "./user.interface";

const AuthProviderSchema = new Schema<IAuthProviders>({
    provider: { type: String },
    providerId: { type: String }
}, {
    versionKey: false,
    _id: false
})

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    address: { type: String, trim: true },
    profile: { type: String },
    gender: {
        type: String,
        enum: Object.values(Gender),
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER

    },
    isActive: {
        type: String,
        enum: Object.values(ActiveStatus),
        default: ActiveStatus.ACTIVE
    },
    isVerified: { type: Boolean },
    isDeleted: { type: Boolean },
    auth: [AuthProviderSchema],
}, {
    timestamps: true,
    versionKey: false
})

export const UserModel = model<IUser>("User", UserSchema)