const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

module.exports = new Sequelize({
	host: process.env.PG_HOST,
	username: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
	dialect: 'postgres',
	storage: ':memory:',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	define: {
		timestamps: true,
		freezeTableName: true,
		// logging: console.log,
	},
});

// module.exports = new Sequelize(process.env.DATABASE_URL, {
// 	host: 'localhost',
// 	dialect: 'postgres',
// 	operatorsAliases: false,

// 	pool: {
// 		max: 5,
// 		min: 0,
// 		acquire: 30000,
// 		idle: 10000,
// 	},
// });

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
