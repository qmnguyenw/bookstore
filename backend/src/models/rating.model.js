const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const User = require('./user.model.js');
const Product = require('./product.model.js');

class Rating extends Model {}

Rating.init(
	{
		rating_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		comment: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		rating_number: {
			type: DataTypes.INTEGER,
			defaultValue: 5,
			allowNull: false,
		},
	},
	{
		sequelize,
		modelName: 'Rating',
	}
);

Rating.hasOne(User);
Rating.hasOne(Product);

module.exports = Rating;
