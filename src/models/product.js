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
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Product;
};

