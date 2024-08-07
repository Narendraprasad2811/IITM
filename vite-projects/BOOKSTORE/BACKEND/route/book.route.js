import express from "express"
import { getBook } from "../Controller/Book.controller.js"
import { searchBooks } from "../Controller/Book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/search", searchBooks);

export default router;