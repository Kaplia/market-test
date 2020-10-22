// Example model


module.exports = (sequelize, DataTypes) => {

  const Provider = sequelize.define('Provider', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    contractNumber: DataTypes.INTEGER,
    phone: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Provider.hasMany(models.Product, {foreignKey: 'providerId'});
      }
    }
  });

  return Provider;
};

