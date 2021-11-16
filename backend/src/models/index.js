// const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const sequelize = require('../config/db.config.js');

dotenv.config();

// test the connection
sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});

const db = {};

// db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model.js');
db.category = require('./category.model.js');
db.ebook = require('./ebook.model.js');
db.product = require('./product.model.js');
db.image = require('./image.model.js');
db.bundle = require('./bundle.model.js');
db.product_bundle = require('./product_bundle.model.js');
db.library = require('./library.model.js');
db.cart = require('./cart.model.js');
db.order = require('./order.model.js');
db.order_product = require('./order_product.model.js');
db.rating = require('./rating.model.js');

// Product.hasMany(Ebook);
// Product.hasOne(Category);
// Image.belongsTo(Product);
// User.belongsToMany(Product, { through: Cart });
// Product.belongsToMany(User, { through: Cart });
// User.belongsToMany(Product, { through: Library });
// Product.belongsToMany(User, { through: Library });
// Order.belongsToMany(Product, { through: Order_Product });
// Product.belongsToMany(Order, { through: Order_Product });
// Order.belongsTo(User);
// Product.belongsToMany(Bundle, { through: Product_Bundle });
// Bundle.belongsToMany(Product, { through: Product_Bundle });

module.exports = db;
