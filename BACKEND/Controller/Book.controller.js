// Book.controller.js
import Book from "../Model/Book.model.js";

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const searchBooks = async (req, res) => {
    try {
        const { query } = req.query;
        const books = await Book.find({
            $or: [
                { author: { $regex: query, $options: "i" } },
                { title: { $regex: query, $options: "i" } },
                { category: { $regex: query, $options: "i" } }
            ]
        });
        res.status(200).json(books);
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
