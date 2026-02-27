import mongoose from "mongoose"
import app from "./app";
import { envVars } from "./app/config";
import { adminSeed } from "./app/utils/seedAdmin";

const main = async () => {
    try {
        await mongoose.connect(envVars.DB_URL);
        adminSeed();
        app.listen(envVars.PORT, () => {
            console.log(`Server is running on port ${envVars.PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
main();