const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

class Ebook extends Model {}

Ebook.init(
	{
		ebook_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		ebook_name: {
			type: DataTypes.STRING(250),
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
			},
		},
		ebook_link: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
			},
		},
	},
	{
		sequelize,
		modelName: 'Ebook',
	}
);

module.exports = Ebook;
