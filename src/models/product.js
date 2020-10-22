// Example model


module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categoryId: DataTypes.INTEGER,
    providerId: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    value: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Product.belongsTo(models.Provider, {foreignKey: 'providerId'});
        Product.belongsTo(models.Category, {foreignKey: 'categoryId'});
      }
    }
  });

  return Product;
};

