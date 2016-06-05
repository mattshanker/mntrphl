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

var name = "";
exports.getName = function () { conn.query('SELECT name from mentor where a = "1"', function(err, res, fields){
  if (!err){
      arr = JSON.stringify(res); 
      var name = arr.slice(10, 22);
      //console.log(name);
      console.log(name);
  }
  if (err){
  console.log(err);
  }
}
)};


var phone = "";

exports.getPhone = function () { conn.query('SELECT contact from mentor where a = "1"', function(err, res, fields){
  if (!err){
    arr = JSON.stringify(res); 
    var phone = arr.slice(13, 24);
    console.log(arr);
    console.log(phone);
  }
  if (err){
  console.log(err);
  }
}
)};

//   exports.getName = getName;
 //   exports.getPhone = getPhone;
//console.log(process.env.NODE_ENV);

// conn.end(function(err){
//  if(!err){
//    console.log('disconnected');
//  }
//  if (err){
//    console.log(err);
//  }
//});

