const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Sebza',
  password: 'Sione1994!',
  database: 'PracticeDataBase'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});