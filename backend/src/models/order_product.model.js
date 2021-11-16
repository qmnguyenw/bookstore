const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const Product = require('./product.model.js');
const Order = require('./order.model.js');

class Order_Product extends Model {}

Order_Product.init(
	{
		price_at_moment: {
			type: DataTypes.DECIMAL,
			defaultValue: 0.0,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Order_Product',
		timestamps: false,
	}
);

Order.belongsToMany(Product, { through: Order_Product });
Product.belongsToMany(Order, { through: Order_Product });

module.exports = Order_Product;
