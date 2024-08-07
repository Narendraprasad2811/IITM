import Book from "../Model/Book.model.js"

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
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