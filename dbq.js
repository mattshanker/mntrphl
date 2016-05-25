var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'archer',
  database: 'test',
});

conn.connect(function(err) {
  if (!err){
    console.log('connected!');
  }
  if (err){
  console.log(err);
  }
});

var name = [];
function getName () { conn.query('SELECT name from mentor where a = "1"', function(err, res, fields){
  if (!err){
console.log(res);
  }
  if (err){
  console.log(err);
  }
}
)};

getName();

var phone = [];

function getPhone () { conn.query('SELECT contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
phone = JSON.stringify(res); 
  }
  if (err){
  console.log(err);
  }
}
)};
//console.log(process.env.NODE_ENV);

/*conn.end(function(err){
  if(!err){
    console.log('bye');
  }
  if (err){
    console.log(err);
  }
});
*/

