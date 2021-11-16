const slugify = require('slugify');

module.exports = function (sequelize, DataTypes) {
	const Category = sequelize.define(
		'Category',
		{
			category_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			category_name: {
				type: DataTypes.STRING(250),
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true,
				},
			},
			slug: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			description: {
				type: DataTypes.STRING(50),
			},
		},
		{
			sequelize,
			modelName: 'Category',
			hooks: {
				beforeValidate: function (category, options) {
					category.slug = slugify(category.category_name, { lower: true });
				},
			},
		}
	);

	Category.associate = function (models) {};

	return Category;
};
