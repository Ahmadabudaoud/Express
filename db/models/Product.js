const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },

    price: {
      type: DataTypes.INTEGER,
      defaultValue: 5,
      validate: {
        min: 3,
      },
    },

    description: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  });
  return Product;
};
module.exports = ProductModel;
