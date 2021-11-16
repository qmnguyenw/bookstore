const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const User = require('./user.model.js');

class Order extends Model {}

Order.init(
	{
		order_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		payment_method: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		payment_status: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		total_price: {
			type: DataTypes.DECIMAL,
			defaultValue: 0.0,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Order',
	}
);

Order.belongsTo(User);
Order.belongsTo(User);

module.exports = Order;
