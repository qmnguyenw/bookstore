const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const Product = require('./product.model.js');

class Image extends Model {}

Image.init(
	{
		image_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		image_link: {
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
		modelName: 'Image',
	}
);

Image.belongsTo(Product);

module.exports = Image;
