import express from "express";
import { createBook, home, getAllBooks, getBookById, updateBook, deleteBook} from "../controllers/book.controller.js";

const router = express.Router();

router.get("/", home);

router.post("/books", createBook);

router.get("/books", getAllBooks);

router.get("/books/:id", getBookById);

router.put("/books/:id", updateBook);

router.delete("/books/:id", deleteBook);

export default router;