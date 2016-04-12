var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'archer',
  database: 'test',
});

connection.connect(function(err) {
  if (!err){
    console.log('connected!');
  }
  if (err){
  console.log(err);
  }
});

var getInt = function (){
  return Math.floor(Math.random() * (6 - 1  + 1)) + min;
}

var ret = [];
connection.query('SELECT name, contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
  console.log(res);
  ret = JSON.stringify(res); 
  console.log(ret);
  }
  if (err){
  console.log(err);
  }
});


connection.end(function(err){
  if(!err){
    console.log('bye');
  }
  if (err){
    console.log(err);
  }
});

