const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const colors = require('colors');

dotenv.config();

const app = express();

// var corsOptions = {
// 	origin: 'http://localhost:8081',
// };

// MIDDLEWARE //
app.use(cors());
// app.use(cors(corsOptions));
app.use(express.json());
// parse requests of content-type - application/json
// app.use(bodyparser.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(bodyparser.urlencoded({ extended: true }));

// create db
// const db = require('./models/index.js');
// // db.sequelize.sync();
// // // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// ROUTES //

// beginning
app.get('/', (req, res) => {
	res.send('API is running ...');
	// res.json({ message: "Welcome to bookstore application." });
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
	)
);
