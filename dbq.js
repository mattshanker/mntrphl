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

var name = "";
function getName () { conn.query('SELECT name from mentor where a = "1"', function(err, res, fields){
  if (!err){
      arr = JSON.stringify(res); 
      name = arr.slice(10, 22);
      //console.log(name);
      exports.name = name;
  }
  if (err){
  console.log(err);
  }
}
)};

getName();

var phone = "";

function getPhone () { conn.query('SELECT contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
    arr = JSON.stringify(res); 
    phone = arr.slice(13, 24);
    //console.log(phone);
    exports.phone = phone;
  }
  if (err){
  console.log(err);
  }
}
)};
    console.log(getPhone());

//   exports.getName = getName;
//    exports.getPhone = getPhone;
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

