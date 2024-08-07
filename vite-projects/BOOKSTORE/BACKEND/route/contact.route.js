import express from "express";
import { submit } from "../Controller/contact.controller.js";

const router = express.Router();

router.post('/contact', submit);

export default router;
