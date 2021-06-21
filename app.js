const express = require("express");
const productsRoutes = require("./routes/products");
const db = require("./db/models");
const { request, response } = require("express");

const app = express();
app.use(express.json());
app.use("/products", productsRoutes);

db.sequelize.sync({ alter: true });

// Error Middleware
app.use((err, request, response, next) => {
  response
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error" });
});

app.use((request, response, next) => {
  response.status(404).json({ message: "Path not found" });
});

app.listen(8000);
