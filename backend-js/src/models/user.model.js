const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			username: {
				type: DataTypes.STRING(50),
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true,
					is: /^\w{3,}$/,
					// We require usernames to have length of at least 3, and
					// only use letters, numbers and underscores.
				},
			},
			email: {
				type: DataTypes.STRING(250),
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: true,
					is: /^\w{3,}$/,
					// We require usernames to have length of at least 3, and
					// only use letters, numbers and underscores.
				},
			},
			password: {
				type: DataTypes.STRING(250),
				allowNull: false,
				validate: {
					notEmpty: true,
				},
			},
			// role: {
			// 	type: DataTypes.STRING(50),
			// 	allowNull: false,
			// 	defaultValue: 'user',
			// 	validate: {
			// 		notEmpty: true,
			// 	},
			// },
		},
		{
			tableName: 'User',
			instanceMethods: {},
			hooks: {
				beforeCreate: function (user, options) {
					const hashed_password = bcrypt.hashSync(
						user.password,
						bcrypt.genSaltSync(10)
					);
					user.password = hashed_password; //bcrypt.hashSync(user.pwd, bcrypt.genSaltSync(10), null);
				},
				afterCreate: function (user, options) {},
			},
		}
	);

	User.associate = function (models) {};

	User.beforeCreate((user) => {
		console.log(user);
		return user;
	});

	User.prototype.isAdminSync = function () {
		return (
			this.roles != null &&
			this.roles.some((role) => role.name === 'ROLE_ADMIN')
		);
	};
	
	User.prototype.isAdminAsync = async function () {
		let isAdmin = false;
		await this.getRoles()
			.then((roles) => {
				isAdmin = roles.some((r) => r.name === 'ROLE_ADMIN');
			})
			.catch((err) => {
				console.error(err);
				// foreignKey: 'userId', otherKey: 'roleId'
			});

		return isAdmin;
	};

	User.prototype.isValidPassword = function (password) {
		return bcrypt.compareSync(password, this.password);
	};

	User.prototype.generateJwt = function () {
		return jwt.sign(
			{
				userId: this.id,
				username: this.get('username,'),
				roles: this.roles.map((role) => role.name),
			},
			process.env.JWT_SECRET || 'JWT_SUPER_SECRET',
			{ expiresIn: process.env.EXPIRE_TIME || 360000 }
		);
	};

	return User;
};
