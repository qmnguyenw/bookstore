const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const Product = require('./product.model.js');
const User = require('./user.model.js');

class Cart extends Model {}

Cart.init(
	{},
	{
		sequelize,
		modelName: 'Cart',
		timestamps: false,
	}
);

User.belongsToMany(Product, { through: Cart });
Product.belongsToMany(User, { through: Cart });

module.exports = Cart;
