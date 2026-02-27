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

export interface IAuthProviders {
    provider: "google" | "credentials";
    providerId: string;
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
    auth?: IAuthProviders[];
    orders?: Types.ObjectId[];
    reviews?: Types.ObjectId[];
}