import express, { Application, Request, Response, urlencoded } from "express";
import router from "./app/routes";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
const app: Application = express()

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }))

app.use("/api", router)

app.get("/", (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Welcome To Job Board API"
    })
})

app.use(globalErrorHandler);
app.use(notFound);

export default app;