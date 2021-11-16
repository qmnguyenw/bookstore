const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config.js');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

class User extends Model {}

User.init(
	{
		user_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING(250),
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
			},
		},
		email: {
			type: DataTypes.STRING(250),
			allowNull: false,
			unique: true,
			validate: {
				notEmpty: true,
			},
		},
		password: {
			type: DataTypes.STRING(250),
			allowNull: false,
			// hash md5 password
			validate: {
				notEmpty: true,
			},
		},
		role: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'user',
			validate: {
				notEmpty: true,
			},
		},
	},
	{
		sequelize,
		modelName: 'User',

	}
);

module.exports = User;
