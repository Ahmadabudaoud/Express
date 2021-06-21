const { Product } = require("../db/models");

exports.productsList = async (request, response, next) => {
  try {
    const products = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    response.json(products);
  } catch (error) {
    next(error);
  }
};

exports.productsDelete = async (request, response, next) => {
  try {
    await request.product.destroy();
    response.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.productsCreate = async (request, response, next) => {
  try {
    const newProduct = await Product.create(request.body);
    response.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
exports.updateProduct = async (request, response) => {
  try {
    await request.product.update(request.body);
    response.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findByPk(productId);
    return product;
  } catch (error) {
    next(error);
  }
};
