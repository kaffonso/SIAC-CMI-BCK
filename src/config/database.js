const Pool = require("pg").Pool;
require('dotenv').config()
//const config = process.env.development?process.env.NODE_ENV == 'development':process.env.production;

const pool = new Pool({

  user: 'ciwmtaposuydkx',
  host: 'ec2-99-81-16-126.eu-west-1.compute.amazonaws.com',
  database: 'd3id1trn7sk0qj',
  password: '398295e04234284ef31cf80457da3f86effdde28fa651beb57f3578c8d511f1a',
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
