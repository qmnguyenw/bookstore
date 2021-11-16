module.exports = (sequelize, DataTypes) => {
	const Cart = sequelize.define('Cart', {}, { timestamps: false });

	Cart.associate = function (models) {
		models.User.belongsToMany(models.Product, { through: Cart });
		models.Product.belongsToMany(models.User, { through: Cart });
	};

	return Cart;
};
