import express, { Application, Request, Response, urlencoded } from "express";
import router from "./app/routes";
import cookieParser from "cookie-parser";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
const app: Application = express()


// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }))

// Routes
app.use("/api/v1", router)

// Testing Route
app.get("/", (req: Request, res: Response) => {
    res.send({
        success: true,
        message: "Welcome To Job Board API"
    })
})

// Global Error Handler
app.use(globalErrorHandler);

// Not Found Rote
app.use(notFound);

export default app;