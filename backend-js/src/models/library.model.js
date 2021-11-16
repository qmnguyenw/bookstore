module.exports = (sequelize, DataTypes) => {
	const Library = sequelize.define(
		'Library',
		{},
		{
			sequelize,
			modelName: 'Library',
			timestamps: false,
		}
	);

	Library.associate = function (models) {
		User.belongsToMany(Product, { through: Library });
		Product.belongsToMany(User, { through: Library });
	};

	return Library;
};
