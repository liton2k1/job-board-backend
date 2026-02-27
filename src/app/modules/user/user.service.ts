import AppError from "../../helpers/AppError";
import { IAuthProviders, IUser, Role } from "./user.interface";
import { UserModel } from "./user.model"
import httpStatus from "http-status-codes";
import bcrypt from "bcryptjs";
import { envVars } from "../../config";
import { JwtPayload } from "jsonwebtoken";


// Create User
const createUser = async (payload: Partial<IUser>) => {
    const { email, password, ...rest } = payload;

    const isUserExist = await UserModel.findOne({ email });

    if (isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User already exist !")
    }

    const hashPassword = await bcrypt.hash(password as string, Number(envVars.BCRYPT_SALT_ROUND));

    const authProviders: IAuthProviders = { provider: "credentials", providerId: email as string }

    const user = await UserModel.create({
        email,
        password: hashPassword,
        auth: [authProviders],
        ...rest
    });
    return user;
}

// Get All Users
const getAllUsers = async () => {
    const users = await UserModel.find({});
    const totalUsers = await UserModel.countDocuments({})
    return {
        data: users,
        meta: {
            total: totalUsers,
        }
    }
}

// Update User
const updateUser = async (userId: string, payload: Partial<IUser>, decodedToken: JwtPayload) => {

    const isUserExist = await UserModel.findById(userId);
    if (!isUserExist) {
        throw new AppError(httpStatus.NOT_FOUND, "User not found !")
    }

    if (payload.role) {
        if (decodedToken.role === Role.USER) {
            throw new AppError(httpStatus.BAD_REQUEST, "You are not authorized !")
        }

        if (payload.role) {
            throw new AppError(httpStatus.BAD_REQUEST, "You are not authorized !")
        }
    }


    if (payload.isActive || payload.isDeleted || payload.isVerified) {
        if (decodedToken.role === Role.USER) {
            throw new AppError(httpStatus.BAD_REQUEST, "You are not authorized !")
        }
    }

    if (payload.password) {
        payload.password = await bcrypt.hash(payload.password, Number(envVars.BCRYPT_SALT_ROUND))
    }

    const newUpdateUser = await UserModel.findByIdAndUpdate(userId, payload, { new: true, runValidators: true });
    return newUpdateUser;
}

export const UserServices = {
    createUser,
    getAllUsers,
    updateUser
}