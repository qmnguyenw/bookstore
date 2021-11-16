// const Pool = require('pg').Pool;

// // const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'
// // const pool = new Pool({
// //   connectionString,
// // })

// const pool = new Pool({
// 	user: 'postgres',
// 	password: '1',
// 	host: 'localhost',
// 	port: 5432,
// 	database: 'store',
// });

// // test connection
// pool.query('SELECT NOW()', (err, res) => {
// 	if (err) {
// 		console.error(`Error: ${err.message}`.red.underline.bold);
// 		process.exit(1);
// 	} else {
// 		if (res) {
// 			console.log(`DB Connected`.cyan.underline)
// 		}
// 	}
// 	// console.log(err, res);
// 	pool.end();
// });

// module.exports = pool;

module.exports = {
	HOST: 'localhost',
	USER: 'postgres',
	PASSWORD: '1',
	DB: 'store',
	dialect: 'postgres',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
}

