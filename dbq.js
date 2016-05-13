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

function dbQuery () { conn.query('SELECT name, contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
  ret = JSON.stringify(res); 
//  console.log(res);
  console.log(ret);

//  console.log(nam);
/*  str = ret.split('"'); 
  na = (str[3]);
  ph = (str[7]);
  bo = (na + " " + ph);
*/
  }
  if (err){
  console.log(err);
  }
}
)};
dbQuery();
//console.log(process.env.NODE_ENV);

conn.end(function(err){
  if(!err){
    console.log('bye');
  }
  if (err){
    console.log(err);
  }
});

module.export = {getDB: dbQuery}
