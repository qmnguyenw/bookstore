const express = require('express');
const dotenv = require('dotenv');
// import products from './data/products.js';
const pool = require('./db.js');
const cors = require('cors');
const colors = require('colors');

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// beginning
app.get('/', (req, res) => {
	res.send('API is running ...');
});

// products
// get all products
app.get('/api/products', async (req, res) => {
	// res.json(products);
	try {
		const listProduct = await pool.query(
			'SELECT products.*, \
			(SELECT categories.category_name FROM categories \
			WHERE products.category_id = categories.category_id) category, \
			ARRAY_AGG(images.image_link) image, \
			(SELECT COUNT(*) FROM ratings \
			WHERE ratings.product_id = products.product_id) numReviews, \
			(SELECT AVG(rating_number) FROM ratings \
			WHERE ratings.product_id = products.product_id) rating \
			FROM products INNER JOIN images \
			ON products.product_id = images.product_id \
			GROUP BY products.product_id \
			ORDER BY products.product_id; '
		);
		res.json(listProduct.rows);
	} catch (error) {
		console.error(error.message);
	}
});

// get details product
app.get('/api/products/:id', async (req, res) => {
	// const product = products.find((p) => p._id === req.params.id);
	// res.json(product);

	try {
		const { id } = req.params;
		const detailProduct = await pool.query(
			'SELECT products.*, \
			(SELECT categories.category_name FROM categories \
			WHERE products.category_id = categories.category_id) category, \
			ARRAY_AGG(images.image_link) image, \
			(SELECT COUNT(*) FROM ratings \
			WHERE ratings.product_id = products.product_id) numReviews, \
			(SELECT AVG(rating_number) FROM ratings \
			WHERE ratings.product_id = products.product_id) rating \
			FROM products INNER JOIN images \
			ON products.product_id = images.product_id \
			WHERE products.product_id = $1 \
			GROUP BY products.product_id \
			ORDER BY products.product_id; ',
			[id]
		);
		res.json(detailProduct.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// bundles
// get all bundles
app.get('/api/bundles', async (req, res) => {
	try {
		const listBundles = await pool.query(
			'SELECT bundles.*, ARRAY_AGG(products.product_name) products \
			FROM bundles INNER JOIN product_bundle ON bundles.bundle_id = product_bundle.bundle_id \
			INNER JOIN products ON product_bundle.product_id = products.product_id \
			GROUP BY bundles.bundle_id \
			ORDER BY bundles.bundle_id;'
		);
		res.json(listBundles.rows);
	} catch (error) {
		console.error(error.message);
	}
});

// get details bundle
app.get('/api/bundles/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const detailBundle = await pool.query(
			'SELECT bundles.*, ARRAY_AGG(products.product_name) products FROM bundles INNER JOIN product_bundle ON bundles.bundle_id = product_bundle.bundle_id INNER JOIN products ON product_bundle.product_id = products.product_id WHERE bundles.bundle_id = $1 GROUP BY bundles.bundle_id ORDER BY bundles.bundle_id;',
			[id]
		);
		res.json(detailBundle.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// users
// get all users
app.get('/api/users', async (req, res) => {
	try {
		const listUsers = await pool.query(
			'SELECT username, email, role FROM users;'
		);
		res.json(listBundles.rows);
	} catch (error) {
		console.error(error.message);
	}
});

// categories
// get all categories
app.get('/api/categories', async (req, res) => {
	try {
		const listCategories = await pool.query('SELECT * FROM categories;');
		res.json(listCategories.rows);
	} catch (error) {
		console.error(error.message);
	}
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
	)
);
