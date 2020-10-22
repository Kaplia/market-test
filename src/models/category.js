// Example model


module.exports = (sequelize, DataTypes) => {

  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Category.hasMany(models.Product, {foreignKey: 'categoryId'});
      }
    }
  });

  return Category;
};

