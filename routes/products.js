const express = require("express");
const productsControllers = require("../controllers/productsControllers");
const router = express.Router();

router.get("/", productsControllers.productsList);
router.delete("/:productId", productsControllers.productsDelete);
router.post("/", productsControllers.productsCreate);
router.put(":/productId", productsControllers.updateProduct);
module.exports = router;
