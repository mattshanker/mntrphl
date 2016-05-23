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

var name = function () { conn.query('SELECT name from mentor where a = "1"', function(err, res, fields){
  if (!err){
var nam = (JSON.stringify(res)); 
  }
  if (err){
  console.log(err);
  }
}
)};

var phone = function () { conn.query('SELECT contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
var pho = JSON.stringify(res); 
return pho;

  }
  if (err){
  console.log(err);
  }
}
)};
//phone();
//console.log(process.env.NODE_ENV);

console.log(name);

exports.phone = phone;
exports.name = name;

/*conn.end(function(err){
  if(!err){
    console.log('bye');
  }
  if (err){
    console.log(err);
  }
});
*/

