import express from "express";
import bookRoutes from "./routes/book.routes.js";
import cors from "cors";

const app = express();

//you can also use 
app.use(cors()) //which all type of request
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }));

app.use(express.json());

app.use(bookRoutes);

export default app;