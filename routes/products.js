const express = require("express");
const productsControllers = require("../controllers/productsControllers");
const router = express.Router();

router.param("productId", async (request, response, next, productId) => {
  const foundProduct = await productsControllers.fetchProduct(productId, next);
  if (foundProduct) {
    request.product = foundProduct;
  } else {
    next({ message: "product not found", status: 404 });
  }
  next();
});

router.get("/", productsControllers.productsList);
router.delete("/:productId", productsControllers.productsDelete);
router.post("/", productsControllers.productsCreate);
router.put(":/productId", productsControllers.updateProduct);
module.exports = router;
