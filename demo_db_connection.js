var mysql = require('mysql');

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

});