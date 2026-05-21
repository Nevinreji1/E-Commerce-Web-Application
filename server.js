const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

const Product = require("./models/Product");

// Get Products
app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add Product
app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});