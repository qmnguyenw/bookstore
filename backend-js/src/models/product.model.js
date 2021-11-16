module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		'Product',
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

	Product.associate = function (models) {
		Product.hasMany(Ebook);
		Product.hasOne(Category);
	};

	return Product;
};
