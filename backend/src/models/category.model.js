const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

class Category extends Model {}

Category.init(
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
	},
	{
		sequelize,
		modelName: 'Category',
	}
);

module.exports = Category;
