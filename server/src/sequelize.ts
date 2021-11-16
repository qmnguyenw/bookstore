import { Sequelize } from 'sequelize-typescript';

import { config } from './config';

export const sequelize = new Sequelize({
	database: config.PG_DATABASE,
	username: config.PG_USER,
	password: config.PG_PASSWORD,
	host: config.PG_HOST,
	dialect: 'postgres',
	storage: ':memory:',
	//   models: [User, Product, Wishlist, Cart, Review, Order, OrderDetails, Payment],
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	define: {
		timestamps: true,
	},
});
