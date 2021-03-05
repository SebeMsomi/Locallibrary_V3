/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "MSOMISEBE",
  user: "sebza",
  password: "Sione1994!!"
});

con.connect(function(err) {
    if (err)
    console.log ('Cannot connect')
  else
    console.log ('Connected')

});*/

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'MSOMISEBE',
    database : 'PracticeDataBase',
    user     : 'Sebza',
    password : 'Sione1994!!',
	port: '8080',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: '+ err.stack);
      //  return;
    }

    console.log('Connected as id '/* + connection.threadId*/);
});

connection.query('SELECT * FROM Author', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result); 
    });
});

//connection.end();
