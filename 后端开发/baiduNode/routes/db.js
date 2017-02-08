var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'baidunews'
});

module.exports.mysqlConnection = mysqlConnection;