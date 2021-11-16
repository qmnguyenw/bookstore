const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const Product = require('./product.model.js');
const User = require('./user.model.js');

class Library extends Model {}

Library.init(
	{},
	{
		sequelize,
		modelName: 'Library',
		timestamps: false,
	}
);

User.belongsToMany(Product, { through: Library });
Product.belongsToMany(User, { through: Library });

module.exports = Library;
