import { Book } from "../models/book.schema.js";

export function home(req, res) {
    res.status(234).send("Welcome to Mern stack tutorial")
}

export async function createBook(req, res) {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
        return res.status(400).send({
            msg: "Send all required fields!"
        })
    }

    const newBook = { title, author, publishYear }

    try {
        const book = await Book.create(newBook);

        return res.status(200).send({
            success: true,
            msg: "Book is created",
            book
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
}

export async function getAllBooks(req, res) {
    try {
        const books = await Book.find({});
        res.status(200).json({
            msg: "All Books are here",
            counts: books.length,
            data: books
        });
    } catch (error) {

        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
}


export async function getBookById(req, res) {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        res.status(200).json({
            msg: "The book which you asking for",
            data: book
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
}


export async function updateBook(req, res) {
    const { id } = req.params;
    const { title, author, publishYear } = req.body;
    const update = {title, author, publishYear}

    if (!title || !author || !publishYear) {
        return res.status(400).send({
            msg: "Send all required fields!"
        })
    }

    try {
        const book = await Book.findByIdAndUpdate(id, update);
        
        if (!book) {
            return res.status(404).json({ msg: "Book is not found"});
        }

        res.status(200).json({
            msg: "Book is updated"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
}


export async function deleteBook(req, res) {
    const { id } = req.params;

    try {
        const book = await Book.findByIdAndDelete(id);

        if (!book) {
            return res.status(404).json({ msg: "Book is not found"});
        }

        res.status(200).json({ msg: "Book is deleted successfully", data: book})

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ msg: error.message });
    }
}
