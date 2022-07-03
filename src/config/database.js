const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
  user:process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
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
