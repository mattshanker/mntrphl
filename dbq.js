var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'archer',
  database: 'test',
  stringifyObjects: 'true'
});

conn.connect(function(err) {
  if (!err){
    console.log('connected!');
  }
  if (err){
  console.log(err);
  }
});

/*
var name = [];
function getName () { conn.query('SELECT name from mentor where a = "1"', function(err, res, fields){
  if (!err){
      arr = JSON.stringify(res); 
      console.log(res);
      var name = arr.slice(10, 22);
      console.log(name);
  }
  if (err){
  console.log(err);
  }
}
)};
*/

var phone = [];
var name = [];

function getFromDB () { conn.query('SELECT name, contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
    console.log(res);
    var phone = res[0].contact;
    var name = res[0].name;
    console.log(Array.isArray(name));
    console.log(name);
    console.log(phone);
  }
  if (err){
  console.log(err);
  }
}
)};

getFromDB();

 conn.end(function(err){
  if(!err){
    console.log('disconnected');
  }
  if (err){
    console.log(err);
  }
});


