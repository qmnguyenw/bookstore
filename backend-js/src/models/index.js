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

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user.model.js')(sequelize, Sequelize);
db.category = require('./category.model.js')(sequelize, Sequelize);
db.ebook = require('./ebook.model.js')(sequelize, Sequelize);
db.product = require('./product.model.js')(sequelize, Sequelize);
db.image = require('./image.model.js')(sequelize, Sequelize);
db.bundle = require('./bundle.model.js')(sequelize, Sequelize);
db.product_bundle = require('./product_bundle.model.js')(sequelize, Sequelize);
db.library = require('./library.model.js')(sequelize, Sequelize);
db.cart = require('./cart.model.js')(sequelize, Sequelize);
db.order = require('./order.model.js')(sequelize, Sequelize);
db.order_product = require('./order_product.model.js')(sequelize, Sequelize);
db.rating = require('./rating.model.js')(sequelize, Sequelize);


Product.hasMany(Ebook);
Product.hasOne(Category);
Image.belongsTo(Product);
User.belongsToMany(Product, { through: Cart });
Product.belongsToMany(User, { through: Cart });
User.belongsToMany(Product, { through: Library });
Product.belongsToMany(User, { through: Library });
Order.belongsToMany(Product, { through: Order_Product });
Product.belongsToMany(Order, { through: Order_Product });
Order.belongsTo(User);
Product.belongsToMany(Bundle, { through: Product_Bundle });
Bundle.belongsToMany(Product, { through: Product_Bundle });


module.exports = db;
