// Book.model.js
import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
    author: String, // Corrected from 'Author' to 'author'
    summary: String // Adding the 'summary' field
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
