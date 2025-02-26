import express from "express";

import { getProducts, createProduct, deleteProduct, updateProduct } from "../controller/product.controller.js";
const router = express.Router();

export default router;

router.post("/", getProducts);
router.put("/:id", createProduct);
router.delete("/:id", deleteProduct);
router.get("/", updateProduct);