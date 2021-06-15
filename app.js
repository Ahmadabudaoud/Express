let data = require("./data");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
app.listen(8000);

app.get("/products", (request, response) => {
  response.json(data);
});

app.delete("/products/:productId", (request, response) => {
  const productId = request.params.productId;
  const foundProduct = data.find((product) => product.id === +productId);
  if (foundProduct) {
    data = data.filter((e) => e !== foundProduct);
    response.status(204).end();
  } else
    response
      .status(404)
      .json({ message: "a product with this ID doesn't exist" });
});
app.post("/products", (request, response) => {
  const newProductId = data[data.length - 1].id + 1;
  const newProduct = { id: newProductId, ...request.body };
  data.push(newProduct);
  response.status(201).json(newProduct);
});
