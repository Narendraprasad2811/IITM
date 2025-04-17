// Book.routes.js
import express from "express";
import { getBook, searchBooks, getBookById } from "../Controller/Book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/search", searchBooks);
router.get("/:id", getBookById); // New route to get a book by ID

export default router;
