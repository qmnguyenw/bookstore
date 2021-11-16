CREATE TABLE ebooks (
	ebook_id serial PRIMARY KEY,
	ebook_name VARCHAR(255) NOT NULL,
	ebook_link TEXT NOT NULL
)

CREATE TABLE categories (
	category_id serial PRIMARY KEY,
	category_name VARCHAR(255) NOT NULL
)

CREATE TABLE products (
	product_id serial PRIMARY KEY,
	product_name VARCHAR(50) UNIQUE NOT NULL,
	description TEXT NOT NULL,
	category_id INT REFERENCES categories(category_id),
	regular_price decimal NOT NULL,
	sale_price decimal NOT NULL,
	ebook_id INT REFERENCES ebooks(ebook_id),
	sold INT NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE images (
	image_id serial PRIMARY KEY,
	image_link TEXT NOT NULL,
	product_id INT REFERENCES products(product_id)
)

CREATE TABLE bundles (
	bundle_id serial PRIMARY KEY,
	bundle_name VARCHAR(255) NOT NULL,
	bundle_price decimal NOT NULL,
	description TEXT NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE product_bundle (
	bundle_id INT REFERENCES bundles(bundle_id),
	product_id INT REFERENCES products(product_id)
)

CREATE TABLE libraries (
	lib_id serial PRIMARY KEY, -- delete if need
	user_id INT REFERENCES users(user_id),
	product_id INT REFERENCES products(product_id)
)

CREATE TABLE ratings (
	rating_id serial PRIMARY KEY,
	comment TEXT,
	rating_number smallint NOT NULL,
	user_id INT REFERENCES users(user_id),
	product_id INT REFERENCES products(product_id),
	created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE users (
	user_id serial PRIMARY KEY,
	username VARCHAR(255) NOT NULL UNIQUE,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	role VARCHAR(255) NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE carts (
	user_id INT REFERENCES users(user_id) 
	product_id INT REFERENCES products(product_id)
)

CREATE TABLE orders (
	order_id serial PRIMARY KEY,
	user_id INT REFERENCES users(user_id),
	payment_method VARCHAR(255) NOT NULL,
	payment_status VARCHAR(255) NOT NULL,
	total_price decimal NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
)

CREATE TABLE order_product (
	order_id INT REFERENCES orders(order_id),
	product_id INT REFERENCES products(product_id),
	price_at_moment decimal NOT NULL,
	created_at TIMESTAMP DEFAULT NOW()
)