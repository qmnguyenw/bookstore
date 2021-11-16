module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define(
		'Order',
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

	Order.associate = function (models) {
		Order.belongsTo(User);
		Order.belongsTo(User);
	};

	return Order;
};
