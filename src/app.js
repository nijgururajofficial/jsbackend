import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express.app();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

export { app };
