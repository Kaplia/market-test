// Example model


module.exports = (sequelize, DataTypes) => {

  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Category;
};

