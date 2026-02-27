import { Types } from "mongoose";

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER",
}

export enum ActiveStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED",
}

export interface IUser {
    _id?: Types.ObjectId
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    profile?: string;
    gender?: Gender;
    role?: Role;
    isActive?: ActiveStatus;
    isVerified?: boolean;
    isDeleted?: boolean;
}