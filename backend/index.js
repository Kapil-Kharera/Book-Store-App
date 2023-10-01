import express from "express";
import bookRoutes from "./routes/book.routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//you can also use 
//app.use(cors()) //which all type of request process.env.ALLOWED_ORIGIN 
console.log(process.env.ALLOWED_ORIGIN);
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.use(bookRoutes);

export default app;