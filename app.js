const express = require("express");

const productsRoutes = require("./routes/products");

const app = express();
app.use(express.json());
app.use("/products", productsRoutes);

app.listen(8000);
