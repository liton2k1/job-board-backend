import { envVars } from "../config"
import { IAuthProviders, IUser, Role } from "../modules/user/user.interface";
import { UserModel } from "../modules/user/user.model";
import bcrypt from "bcryptjs";

export const adminSeed = async () => {
    try {
        const isAdminExist = await UserModel.findOne({ email: envVars.ADMIN_EMAIL });
        if (isAdminExist) {
            console.log("Admin already exist !");
            return;
        }

        console.log("Trying to create Admin...");

        const hashedPassword = await bcrypt.hash(envVars.ADMIN_PASSWORD, Number(envVars.BCRYPT_SALT_ROUND));

        const authProviders: IAuthProviders = { provider: "credentials", providerId: envVars.ADMIN_EMAIL };

        const payload: IUser = {
            name: "Admin",
            email: envVars.ADMIN_EMAIL,
            password: hashedPassword,
            role: Role.ADMIN,
            isVerified: true,
            auth: [authProviders]

        }

        const admin = await UserModel.create(payload);
        console.log("Admin created successfully !\n");
        console.log(admin);

    } catch (error) {
        console.log(error)
    }
}