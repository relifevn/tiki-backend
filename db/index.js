const mysql = require('mysql');

/**
 * Use terminal:
 * mysql --host=remotemysql.com --user=9RAYkjHRiB --password=Gkzvg0gsiT 9RAYkjHRiB
 */

const db = mysql.createConnection({
  host: "remotemysql.com",
  port: "3306",
  user: "9RAYkjHRiB",
  password: "Gkzvg0gsiT",
  database: "9RAYkjHRiB"
});

db.connect(function (err) {
  if (err) {console.warn('[ERROR] Connect to mysql failed!', err)};
  console.log("Connected to mysql!");
});

exports = { db }