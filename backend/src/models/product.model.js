const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const Ebook = require('./ebook.model.js');
const Category = require('./category.model.js');

class Product extends Model {}

Product.init(
	{
		product_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		product_name: {
			type: DataTypes.STRING(250),
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
			},
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		regular_price: {
			type: DataTypes.DECIMAL,
			defaultValue: 0.0,
			allowNull: false,
		},
		sale_price: {
			type: DataTypes.DECIMAL,
			defaultValue: 0.0,
			allowNull: false,
		},
		sold: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Product',
	}
);

Product.hasMany(Ebook);
Product.hasOne(Category);

module.exports = Product;
