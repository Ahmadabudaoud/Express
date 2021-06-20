const express = require("express");
const productsRoutes = require("./routes/products");
const db = require("./db/models");

const app = express();
app.use(express.json());
app.use("/products", productsRoutes);

db.sequelize.sync();
app.listen(8000);
