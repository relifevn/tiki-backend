const mysql = require('mysql');
const config = process.env;

/**
 * Use terminal:
 * mysql --host=remotemysql.com --user=9RAYkjHRiB --password=Gkzvg0gsiT 9RAYkjHRiB
 */

const db = mysql.createConnection({
  host: config.HOST || "remotemysql.com",
  port: config.PORT || "3306",
  user: config.USER || "P0qdxyaYNp",
  password: config.PASSWORD || "oB3HNUgEo4",
  database: config.USER || "9RAYkjHRiB",
});

db.connect(function (err) {
  if (err) { console.warn('[ERROR] Connect to mysql failed!', err) };
  console.log("Connected to mysql!");
});

module.exports = db;