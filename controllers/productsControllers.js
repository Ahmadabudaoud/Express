// const products = require("../data");
const { request, response } = require("express");
let data = require("../data");
const { Product } = require("../db/models");

exports.productsList = async (request, response) => {
  try {
    const products = await Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    response.json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

exports.productsDelete = async (request, response) => {
  const { productId } = request.params;
  try {
    const foundProduct = await Product.findByPk(productId);
    if (foundProduct) {
      await foundProduct.destroy();
      response.status(204).end();
    } else {
      response
        .status(404)
        .json({ message: "a product with this ID doesn't exist" });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

exports.productsCreate = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);

    response.status(201).json(newProduct);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
exports.updateProduct = async (request, response) => {
  const { productId } = request.params;
  try {
    const foundProduct = await Product.findByPk(productId);
    if (foundProduct) {
      await foundProduct.update(request.body);
      response.status(204).end();
    } else {
      response.status(404).json({ message: error.message });
    }
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
