module.exports = (sequelize, DataTypes) => {
	const Order_Product = sequelize.define(
		'Order_Product',
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

	Order_Product.associate = function (models) {
		Order.belongsToMany(Product, { through: Order_Product });
		Product.belongsToMany(Order, { through: Order_Product });
	};

	return Order_Product;
};
