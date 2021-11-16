const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const Product = require('./product.model.js');
const Bundle = require('./bundle.model.js');

class Product_Bundle extends Model {}

Product_Bundle.init(
	{},
	{
		sequelize,
		modelName: 'Product_Bundle',
		timestamps: false,
	}
);

Product.belongsToMany(Bundle, { through: Product_Bundle });
Bundle.belongsToMany(Product, { through: Product_Bundle });

module.exports = Product_Bundle;
