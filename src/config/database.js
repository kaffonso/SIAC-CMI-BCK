const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({

  user: 'rmtsthhblhreql',
  host: 'ec2-3-248-121-12.eu-west-1.compute.amazonaws.com',
  database: 'd2us0lvtj0q2cf',
  password: '2322e3f25a2d45629723c639bb6d9f297770d4cb553445490edbd8e99197aed3',
  dialect: 'postgres',
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  }
// =======
//   user:process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
// >>>>>>> filter
});

console.log(process.env.DB_PASS)

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => { 
  release(); 
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    console.log(`Connected to Database ${pool.options.database}`);
  });
});

module.exports = pool
