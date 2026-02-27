import AppError from "../../helpers/AppError";
import { IUser } from "./user.interface";
import { UserModel } from "./user.model"
import httpStatus from "http-status-codes";
import bcrypt from "bcryptjs";
import { envVars } from "../../config";


const createUser = async (payload: Partial<IUser>) => {
    const { email, password, ...rest } = payload;

    const isUserExist = await UserModel.findOne({ email });

    if (isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User already exist !")
    }

    const hashPassword = await bcrypt.hash(password as string, Number(envVars.BCRYPT_SALT_ROUND));

    const user = await UserModel.create({
        email,
        password: hashPassword,
        ...rest
    });
    return user;
}

export const UserServices = {
    createUser
}