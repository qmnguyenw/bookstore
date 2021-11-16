module.exports = (sequelize, DataTypes) => {
	const Product_Bundle = sequelize.define(
		'Product_Bundle',
		{},
		{
			sequelize,
			modelName: 'Product_Bundle',
			timestamps: false,
		}
	);

	Product_Bundle.associate = function (models) {
		Product.belongsToMany(Bundle, { through: Product_Bundle });
		Bundle.belongsToMany(Product, { through: Product_Bundle });
	};

	return Product_Bundle;
};
